import requests

def find_dataset():
    headers = {
        "User-Agent": "Mozilla/5.0"
    }
    # Search repositories
    q = "resume screening dataset"
    url = f"https://api.github.com/search/repositories?q={q}&sort=stars&order=desc"
    
    print(f"Searching repositories: {url}")
    r = requests.get(url, headers=headers)
    if r.status_code != 200:
        print(f"Repo search failed: {r.status_code} - {r.text}")
        return
    
    repos = r.json().get('items', [])
    print(f"Found {len(repos)} repositories.")
    
    for repo in repos[:15]:
        full_name = repo.get('full_name')
        default_branch = repo.get('default_branch', 'main')
        print(f"\nChecking repo: {full_name} (branch: {default_branch})")
        
        # Check files in repo using git trees API or direct guess
        # Let's try direct guesses for common files in the repo
        guess_files = [
            "UpdatedResumeDataset.csv",
            "Resume/Resume.csv",
            "Resume.csv",
            "Dataset/Resume.csv",
            "dataset/Resume.csv",
            "data/Resume.csv",
            "data/UpdatedResumeDataset.csv"
        ]
        
        for gf in guess_files:
            raw_url = f"https://raw.githubusercontent.com/{full_name}/{default_branch}/{gf}"
            try:
                head_r = requests.head(raw_url, timeout=5)
                if head_r.status_code == 200:
                    size = head_r.headers.get('Content-Length', 'unknown')
                    print(f"Found match! URL: {raw_url} (Size: {size})")
                    # Download the file
                    print("Downloading...")
                    get_r = requests.get(raw_url, timeout=20)
                    if get_r.status_code == 200:
                        filename = "UpdatedResumeDataset.csv" if "UpdatedResume" in gf else "Resume.csv"
                        with open(filename, "wb") as f:
                            f.write(get_r.content)
                        print(f"Downloaded and saved to {filename} ({len(get_r.content)} bytes)")
                        return
            except Exception as e:
                print(f"Error checking {raw_url}: {e}")

if __name__ == "__main__":
    find_dataset()
