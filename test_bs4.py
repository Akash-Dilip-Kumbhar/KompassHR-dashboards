import os
from bs4 import BeautifulSoup

root_dir = r"c:\Users\hp\Downloads\kampasshr\kampasshr"
filename = "dashboard.html"
filepath = os.path.join(root_dir, filename)

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

soup = BeautifulSoup(content, "html.parser")
out_content = str(soup)

if content == out_content:
    print("Exact match!")
else:
    print(f"Length diff: original {len(content)}, new {len(out_content)}")
    
    # Check first 50 chars of difference
    for i in range(min(len(content), len(out_content))):
        if content[i] != out_content[i]:
            print(f"First diff at {i}: orig '{content[i:i+50]}' vs new '{out_content[i:i+50]}'")
            break
