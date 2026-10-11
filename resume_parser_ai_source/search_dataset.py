import requests
import json

def search_github():
    # Search for files named UpdatedResumeDataset.csv or Resume.csv in github
    queries = [
        "https://api.github.com/search/code?q=filename:UpdatedResumeDataset.csv",
        "https://api.github.com/search/code?q=filename:Resume.csv+size:>1000000"
    ]
    
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Mozilla/5.0"
    }
    
    for url in queries:
        try:
            print(f"Searching: {url}")
            r = requests.get(url, headers=headers)
            if r.status_code == 200:
                data = r.json()
                items = data.get('items', [])
                print(f"Found {len(items)} results")
                for item in items[:5]:
                    raw_url = item.get('html_url', '').replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/')
                    print(f"Name: {item.get('name')}, Path: {item.get('path')}, Repository: {item.get('repository', {}).get('full_name')}")
                    print(f"Raw URL: {raw_url}")
            else:
                print(f"Error {r.status_code}: {r.text}")
        except Exception as e:
            print(f"Exception: {e}")

if __name__ == "__main__":
    search_github()
