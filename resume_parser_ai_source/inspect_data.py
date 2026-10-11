import pandas as pd

df = pd.read_csv("Resume.csv")
print("Dataset columns:", df.columns)
print("Shape:", df.shape)
print("\nFirst 3 rows:\n")
print(df.head(3))
print("\nUnique categories:\n")
print(df.iloc[:, 0].value_counts().head(10))
