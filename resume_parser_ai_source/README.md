# Resume Parser AI Project

An advanced, AI-powered resume parser and candidate screening dashboard. Unlike simple keyword matching engines, this system uses Natural Language Processing (NLP) techniques, Word2Vec semantic word embeddings, and K-Means clustering to evaluate resumes contextually. It also contains built-in mechanisms to detect and penalize "keyword stuffing" spammers.

## Key Features
- **NLTK Text Preprocessing**: Cleans special characters, tokenizes, filters stopwords, and lemmatizes words to normalize vocabulary.
- **Word2Vec Semantic Modeling**: Embeds vocabulary into a contextual space. Words that are similar in context (e.g. "regression" and "classification") are mapped close together.
- **AI Domain Clustering**: Groups domain-specific terms (derived from TF-IDF) into 4 distinct skill dimensions per job profile using K-Means clustering.
- **Anti-Spam / Stuffing Penalty**: Identifies repetitive keywords, caps their match value, and applies a penalty to prevent candidates from gaming the system.
- **Contextual Synonym Match**: Awards credit for words close in context (cosine similarity > 70% in Word2Vec space) even if the exact keyword is missing.
- **Sleek Web Interface**: Visualizes candidates on a glassmorphic dashboard featuring glowing SVG score meters, cluster accordions, and a Domain Encyclopedia.

## Codebase Structure
- `parser_engine.py`: Machine learning algorithm classes for preprocessing, Word2Vec model loading/training, K-Means clustering, and 0-10 scoring.
- `app.py`: Flask backend exposing JSON REST APIs and serving the web interface.
- `templates/index.html`: The HTML layout for the interactive dashboard and encyclopedia views.
- `static/style.css`: Sleek, custom dark-mode CSS containing glassmorphism styling and micro-animations.
- `static/app.js`: JavaScript handling API requests, sample resume loading, tab switching, and dynamic rendering.
- `Resume.csv`: Core Kaggle dataset containing 960+ resumes categorized by job categories.

## Setup & Running Instructions

### 1. Install Dependencies
Make sure you have Python 3.8+ installed, then install the required Python packages:
```bash
pip install pandas scikit-learn nltk gensim beautifulsoup4 flask
```

### 2. Download NLTK Corpora
Run the following script to download the required NLTK resources:
```bash
python download_nltk.py
```
*(Alternatively, run: `python -c "import nltk; nltk.download('punkt'); nltk.download('punkt_tab'); nltk.download('stopwords'); nltk.download('wordnet'); nltk.download('omw-1.4'); nltk.download('averaged_perceptron_tagger');"`)*

### 3. Run the Web Application
Start the Flask server:
```bash
python app.py
```

### 4. Access the Dashboard
Open your web browser and go to:
```url
http://127.0.0.1:5000
```
Use the dropdown to select a position, click **Load Sample Resume** to fill in the resume field, and press **Analyze Candidate** to see the AI screening dashboard in action!
