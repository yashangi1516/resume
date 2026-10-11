import pandas as pd
import numpy as np
import re
import os
import pickle
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from gensim.models import Word2Vec

class ResumeParserEngine:
    def __init__(self):
        self.stop_words = set(stopwords.words('english'))
        self.lemmatizer = WordNetLemmatizer()
        self.w2v_model = None
        self.category_clusters = {} # stores {category: {cluster_id: [words]}}
        self.category_top_words = {} # stores {category: [top_words]}
        self.all_categories = []
        
    def clean_text(self, text):
        if not isinstance(text, str):
            return ""
        # Remove URLs
        text = re.sub(r'http\S+\s*', ' ', text)
        # Remove RT, cc
        text = re.sub(r'RT|cc', ' ', text)
        # Remove hashtags and mentions
        text = re.sub(r'#\S+|@\S+', ' ', text)
        # Remove email addresses
        text = re.sub(r'\S+@\S+', ' ', text)
        # Keep only alphabetic characters and spaces (remove numbers & special characters)
        text = re.sub(r'[^a-zA-Z\s]', ' ', text)
        # Remove extra whitespaces
        text = re.sub(r'\s+', ' ', text)
        return text.strip().lower()

    def tokenize_and_preprocess(self, text):
        cleaned = self.clean_text(text)
        tokens = word_tokenize(cleaned)
        # Remove stopwords and short words, and lemmatize
        processed = [self.lemmatizer.lemmatize(t) for t in tokens if t not in self.stop_words and len(t) > 2]
        return processed

    def train_or_load(self, csv_path="Resume.csv", force_retrain=False):
        model_file = "word2vec.model"
        clusters_file = "category_clusters.pkl"
        
        if not force_retrain and os.path.exists(model_file) and os.path.exists(clusters_file):
            print("Loading pre-trained models and clusters...")
            self.w2v_model = Word2Vec.load(model_file)
            with open(clusters_file, "rb") as f:
                data = pickle.load(f)
                self.category_clusters = data["category_clusters"]
                self.category_top_words = data["category_top_words"]
                self.all_categories = data["all_categories"]
            return
        
        print("Preprocessing dataset for training...")
        df = pd.read_csv(csv_path)
        # Remove duplicates and nulls
        df = df.dropna().drop_duplicates()
        
        self.all_categories = sorted(df['Category'].unique().tolist())
        
        # Preprocess all resumes
        df['Processed_Tokens'] = df['Resume'].apply(self.tokenize_and_preprocess)
        
        print("Training Word2Vec model on the corpus...")
        # Train word2vec model
        # vector_size=100, min_count=2, window=5
        self.w2v_model = Word2Vec(
            sentences=df['Processed_Tokens'].tolist(),
            vector_size=100,
            window=5,
            min_count=2,
            workers=4,
            epochs=20
        )
        self.w2v_model.save(model_file)
        print("Word2Vec model trained and saved.")
        
        print("Building skill clusters for each category...")
        # Group by category to find top terms using TF-IDF
        for cat in self.all_categories:
            cat_resumes = df[df['Category'] == cat]['Resume'].apply(lambda x: " ".join(self.tokenize_and_preprocess(x)))
            
            # Compute TF-IDF for this category
            vectorizer = TfidfVectorizer(max_features=60)
            tfidf_matrix = vectorizer.fit_transform(cat_resumes)
            feature_names = vectorizer.get_feature_names_out()
            
            # Find the top words in this category based on mean TF-IDF score
            mean_tfidf = np.asarray(tfidf_matrix.mean(axis=0)).ravel()
            top_indices = mean_tfidf.argsort()[::-1]
            top_words = [feature_names[i] for i in top_indices if feature_names[i] in self.w2v_model.wv]
            
            self.category_top_words[cat] = top_words
            
            # Cluster these top words based on their Word2Vec embeddings
            if len(top_words) >= 8:
                word_vectors = [self.w2v_model.wv[w] for w in top_words]
                
                # Determine number of clusters (e.g. 4 clusters)
                n_clusters = min(4, len(top_words))
                kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
                kmeans.fit(word_vectors)
                
                # Group words by cluster
                clusters = {i: [] for i in range(n_clusters)}
                for word, label in zip(top_words, kmeans.labels_):
                    clusters[label].append(word)
                
                self.category_clusters[cat] = clusters
            else:
                # Fallback if too few words
                self.category_clusters[cat] = {0: top_words}
                
            print(f"Built clusters for: {cat}")
            for cid, words in self.category_clusters[cat].items():
                print(f"  Cluster {cid}: {', '.join(words[:10])}")
        
        # Save categories and clusters
        with open(clusters_file, "wb") as f:
            pickle.dump({
                "category_clusters": self.category_clusters,
                "category_top_words": self.category_top_words,
                "all_categories": self.all_categories
            }, f)
        print("Clusters saved.")

    def score_resume(self, resume_text, target_category):
        if target_category not in self.category_clusters:
            return {"error": f"Category '{target_category}' not found."}
            
        resume_tokens = self.tokenize_and_preprocess(resume_text)
        if not resume_tokens:
            return {
                "score": 0.0,
                "feedback": "The resume appears to be empty or contains no readable/valid text after preprocessing.",
                "warnings": ["Empty or invalid text input."],
                "details": {}
            }
            
        # 1. Keyword Stuffing Detection & Prevention
        # Count frequency of each token in the resume
        token_counts = {}
        for token in resume_tokens:
            token_counts[token] = token_counts.get(token, 0) + 1
            
        # Penalize if a candidate repeats the same words excessively (e.g., spamming keywords)
        excessive_repetition_penalty = 0.0
        warnings = []
        
        # Filtered resume tokens where excessive repetitions are capped to mitigate keyword stuffing
        capped_tokens = []
        for token, count in token_counts.items():
            if count > 4: # If a word is repeated more than 4 times
                # Add penalty contribution
                excessive_repetition_penalty += 0.05 * (count - 4)
                capped_tokens.extend([token] * 4) # cap the contribution of this word to at most 4 occurrences
                if count > 8:
                    warnings.append(f"Excessive repetition of keyword '{token}' ({count} times) detected. Scoring has penalized potential keyword stuffing.")
            else:
                capped_tokens.extend([token] * count)
        
        # Also check unique vocabulary ratio: if the resume is just a list of words, it has a very high unique ratio but very low length, or vice versa.
        # More specifically, if it has a very low unique word count relative to total words, it might be spam.
        # But a more common trick is keyword stuffing: writing long list of skills.
        # We check the ratio of matching words that appear in structured sentences vs just floating around.
        # Since we clean punctuation, we can check basic lexical diversity.
        unique_ratio = len(token_counts) / len(resume_tokens)
        if len(resume_tokens) > 50 and unique_ratio < 0.25:
            excessive_repetition_penalty += 1.0
            warnings.append("Low vocabulary diversity detected (many repeated words). Suspected keyword stuffing.")
            
        # 2. Context-Aware Matching using Word2Vec
        clusters = self.category_clusters[target_category]
        cluster_scores = {}
        matched_details = {} # stores {cluster_id: {"matched_skills": [], "semantic_matches": [], "missing_skills": []}}
        
        all_target_skills = []
        for cid, words in clusters.items():
            all_target_skills.extend(words)
            
        # For each cluster, compute the matching score
        total_clusters = len(clusters)
        cluster_match_percentages = []
        
        for cid, cluster_words in clusters.items():
            matched_skills = []
            semantic_matches = []
            missing_skills = []
            
            # For each word in the cluster, find if it is present or has a contextually similar word in the resume
            for c_word in cluster_words:
                # Case 1: Exact Match (after lemmatization)
                if c_word in token_counts:
                    matched_skills.append(c_word)
                else:
                    # Case 2: Semantic/Contextual Match
                    # Find if any word in the resume is highly similar to this cluster word
                    best_sim = 0.0
                    best_word = None
                    if c_word in self.w2v_model.wv:
                        for r_word in token_counts.keys():
                            if r_word in self.w2v_model.wv:
                                sim = self.w2v_model.wv.similarity(c_word, r_word)
                                if sim > best_sim:
                                    best_sim = sim
                                    best_word = r_word
                    
                    if best_sim > 0.70: # Cosine similarity threshold
                        semantic_matches.append({
                            "domain_skill": c_word,
                            "resume_word": best_word,
                            "similarity": round(float(best_sim), 2)
                        })
                    else:
                        missing_skills.append(c_word)
            
            # Score for this cluster is: (exact matches + 0.6 * semantic matches) / total words in cluster
            n_exact = len(matched_skills)
            n_semantic = len(semantic_matches)
            n_total = len(cluster_words)
            
            cluster_score = (n_exact + 0.6 * n_semantic) / n_total if n_total > 0 else 0.0
            cluster_scores[cid] = min(1.0, cluster_score)
            
            matched_details[cid] = {
                "cluster_words": cluster_words,
                "matched_skills": matched_skills,
                "semantic_matches": semantic_matches,
                "missing_skills": missing_skills,
                "score": round(cluster_scores[cid], 2)
            }
            cluster_match_percentages.append(cluster_scores[cid])
            
        # 3. Calculate Final Weightage Score (0 to 10)
        # We reward:
        # A) High overall overlap (average cluster score)
        # B) High coverage (how many clusters did they hit? This prevents high score from matching just one cluster)
        avg_overlap = np.mean(cluster_match_percentages)
        
        # Coverage factor: number of clusters with > 10% match
        active_clusters = sum(1 for s in cluster_match_percentages if s > 0.10)
        coverage_ratio = active_clusters / total_clusters if total_clusters > 0 else 0.0
        
        # Final raw score combines overlap and coverage
        # 60% weight on average overlap, 40% weight on cluster coverage
        raw_score = (0.6 * avg_overlap + 0.4 * coverage_ratio) * 10.0
        
        # Apply keyword stuffing/repetition penalties
        final_score = raw_score - excessive_repetition_penalty
        final_score = max(0.0, min(10.0, final_score)) # bound between 0 and 10
        
        # Generate custom feedback
        feedback_lines = []
        if final_score >= 8.0:
            feedback_lines.append("Excellent match! The candidate possesses strong coverage of core domain skills and concepts.")
        elif final_score >= 5.0:
            feedback_lines.append("Good match. The candidate has solid foundational skills but is missing some specialized clusters.")
        else:
            feedback_lines.append("Weak match. The resume lacks critical skills and semantic context for this position.")
            
        # Highlight gaps
        weak_clusters = [cid for cid, score in cluster_scores.items() if score < 0.30]
        if weak_clusters:
            feedback_lines.append(f"Resume is particularly weak in {len(weak_clusters)} areas. Focus on adding keywords and experiences related to these missing concepts.")
            
        # Highlight key matches
        strong_skills = []
        for cid, details in matched_details.items():
            strong_skills.extend(details["matched_skills"])
        if strong_skills:
            feedback_lines.append(f"Strongest skill areas found: {', '.join(strong_skills[:8])}.")
            
        return {
            "score": round(final_score, 2),
            "feedback": " ".join(feedback_lines),
            "warnings": warnings,
            "details": matched_details,
            "metrics": {
                "average_overlap": round(avg_overlap, 2),
                "cluster_coverage": round(coverage_ratio, 2),
                "keyword_stuffing_penalty": round(excessive_repetition_penalty, 2)
            }
        }
        
if __name__ == "__main__":
    # Test training
    engine = ResumeParserEngine()
    engine.train_or_load(force_retrain=True)
    
    # Test scoring a dummy resume
    test_resume = """
    Skills: Python, Machine Learning, Data Science, Pandas, Numpy, SQL, Data Analysis.
    Experience: Worked as a Data Scientist building regression and classification models.
    Used mysql and databases. Python developer.
    """
    res = engine.score_resume(test_resume, "Data Science")
    print("\n--- Test Scoring Result ---")
    print("Score:", res["score"])
    print("Feedback:", res["feedback"])
    print("Warnings:", res["warnings"])
