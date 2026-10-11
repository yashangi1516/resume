from flask import Flask, request, jsonify, render_template
import os
from parser_engine import ResumeParserEngine

app = Flask(__name__)

# Initialize the parser engine
engine = ResumeParserEngine()
# Load pre-trained models. Since we already trained them, it will load instantly.
engine.train_or_load(csv_path="Resume.csv")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/categories', methods=['GET'])
def get_categories():
    try:
        return jsonify({
            "status": "success",
            "categories": engine.all_categories
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

@app.route('/api/category_details/<category_name>', methods=['GET'])
def get_category_details(category_name):
    try:
        if category_name not in engine.category_clusters:
            return jsonify({
                "status": "error",
                "message": f"Category '{category_name}' not found."
            }), 404
            
        clusters = engine.category_clusters[category_name]
        top_words = engine.category_top_words.get(category_name, [])
        
        # Clean response format: make sure integer keys are converted to strings for JSON
        formatted_clusters = {}
        for cid, words in clusters.items():
            formatted_clusters[str(cid)] = words
            
        return jsonify({
            "status": "success",
            "category": category_name,
            "top_words": top_words,
            "clusters": formatted_clusters
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

@app.route('/api/score', methods=['POST'])
def score_resume():
    try:
        data = request.get_json()
        if not data:
            return jsonify({
                "status": "error",
                "message": "Missing request payload."
            }), 400
            
        resume_text = data.get("resume_text", "")
        target_category = data.get("target_category", "")
        
        if not resume_text or not target_category:
            return jsonify({
                "status": "error",
                "message": "Both 'resume_text' and 'target_category' are required."
            }), 400
            
        result = engine.score_resume(resume_text, target_category)
        
        # Structure response
        return jsonify({
            "status": "success",
            "data": result
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

if __name__ == '__main__':
    # Run Flask server locally
    app.run(debug=True, port=5000)
