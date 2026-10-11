import nltk

def download_resources():
    resources = ['punkt', 'stopwords', 'wordnet', 'omw-1.4', 'averaged_perceptron_tagger']
    for res in resources:
        try:
            print(f"Downloading NLTK resource: {res}")
            nltk.download(res)
        except Exception as e:
            print(f"Failed to download {res}: {e}")

if __name__ == "__main__":
    download_resources()
