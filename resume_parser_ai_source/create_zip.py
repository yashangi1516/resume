import zipfile
import os

def create_project_zip():
    zip_name = "resume_parser_ai.zip"
    
    # List of specific files and folders to package
    files_to_zip = [
        "app.py",
        "parser_engine.py",
        "Resume.csv",
        "download_nltk.py",
        "README.md",
        "VSCODE_GUIDE.md"
    ]
    
    folders_to_zip = {
        "templates": ["index.html"],
        "static": ["style.css", "app.js"]
    }
    
    print(f"Creating ZIP file: {zip_name}")
    try:
        with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
            # Add root files
            for file in files_to_zip:
                if os.path.exists(file):
                    print(f"Adding: {file}")
                    zipf.write(file)
                else:
                    print(f"Warning: {file} not found.")
            
            # Add subfolder files
            for folder, files in folders_to_zip.items():
                for file in files:
                    file_path = os.path.join(folder, file)
                    if os.path.exists(file_path):
                        print(f"Adding: {file_path}")
                        zipf.write(file_path)
                    else:
                        print(f"Warning: {file_path} not found.")
                        
        print(f"ZIP file successfully created! File size: {os.path.getsize(zip_name)} bytes")
    except Exception as e:
        print(f"Failed to create ZIP: {e}")

if __name__ == "__main__":
    create_project_zip()
