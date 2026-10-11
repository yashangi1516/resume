import requests
from bs4 import BeautifulSoup
import re
import urllib.parse

def search_ddg(query):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    r = requests.get(url, headers=headers)
    if r.status_code != 200:
        print("DDG search failed")
        return []
    
    soup = BeautifulSoup(r.text, 'html.parser')
    links = []
    for a in soup.find_all('a', class_='result__snippet'):
        pass
    
    # Try finding any links pointing to github.com
    for a in soup.find_all('a', href=True):
        href = a['href']
        if 'github.com' in href and ('UpdatedResumeDataset' in href or 'Resume' in href):
            # Parse DDG redirect if needed
            if 'uddg=' in href:
                actual_url = href.split('uddg=')[1].split('&')[0]
                actual_url = urllib.parse.unquote(actual_url)
                links.append(actual_url)
            else:
                links.append(href)
    return list(set(links))

if __name__ == "__main__":
    # Let's install bs4 first if we need to, but wait, let's try running this.
    # If bs4 is not installed, we can try to install it.
    try:
        import bs4
    except ImportError:
        import subprocess
        subprocess.check_call(["pip", "install", "beautifulsoup4"])
    
    links = search_ddg('site:github.com "UpdatedResumeDataset.csv" raw')
    print("Found GitHub links:")
    for link in links:
        print(link)
        # Convert link to raw user content if needed
        raw_link = link
        if 'github.com' in link and '/blob/' in link:
            raw_link = link.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/')
        
        try:
            print(f"Trying to download: {raw_link}")
            r = requests.get(raw_link, timeout=10)
            if r.status_code == 200 and len(r.content) > 10000:
                with open("UpdatedResumeDataset.csv", "wb") as f:
                    f.write(r.content)
                print(f"Success! Saved to UpdatedResumeDataset.csv ({len(r.content)} bytes)")
                break
        except Exception as e:
            print(f"Failed to download {raw_link}: {e}")
