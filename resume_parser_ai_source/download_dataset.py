import requests
import os

urls = [
    "https://raw.githubusercontent.com/javedali99/Resume-Screening-with-Python/main/UpdatedResumeDataset.csv",
    "https://raw.githubusercontent.com/its-charan/Resume-Screening-using-NLP/master/UpdatedResumeDataset.csv",
    "https://raw.githubusercontent.com/irfan-k/Resume-Screening-App/master/UpdatedResumeDataset.csv",
    "https://raw.githubusercontent.com/shreyas-bhat/Resume-Screening/master/UpdatedResumeDataset.csv",
    "https://raw.githubusercontent.com/hrc-24/Resume-Parser/master/UpdatedResumeDataset.csv",
    "https://raw.githubusercontent.com/rohitbhalerao28/Resume-Screening-using-Machine-Learning/master/UpdatedResumeDataset.csv"
]

downloaded = False
for url in urls:
    try:
        print(f"Trying to download from: {url}")
        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            with open("UpdatedResumeDataset.csv", "wb") as f:
                f.write(r.content)
            print(f"Successfully downloaded to UpdatedResumeDataset.csv! File size: {len(r.content)} bytes")
            downloaded = True
            break
        else:
            print(f"Status code: {r.status_code}")
    except Exception as e:
        print(f"Error downloading: {e}")

if not downloaded:
    print("Could not download the dataset from common URLs.")
