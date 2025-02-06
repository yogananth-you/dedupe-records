# Deduplication Script

This script removes duplicate records from **file1** that also exist in **file2** and saves the deduplicated output in a new file.

## 📌 How to Execute

### **Prerequisites**
Ensure you have **Node.js** installed on your system. You can verify the installation with:

```sh
node -v
```

## Run the script
Execute the script using the following command:

```
node dedupe.js <file1.csv> <file2.csv> [output.csv]
```

- <file1.csv> → The main file from which duplicates should be removed.
- <file2.csv> → The file containing records that should be removed from file1.
- [output.csv] (optional) → The output file where the deduplicated data will be saved. If not specified, the default output path is ./output-files/deduped_output.csv

## Example Usage
```
node dedupe.js test-files/file1.csv test-files/file2.csv test-files/deduped_
output.csv
```

## 🛠️ What the Script Does
1.	Reads the contents of file1.csv and file2.csv.
2.	Compares the records in file1 against file2.
3.	Removes records in file1 that are present in file2.
4.	Saves the deduplicated records to an output file.

## Example Data

### Input: file1.csv
```
101
102
105
107
109
112
117
```

### Input: file2.csv
```
111
102
115
107
109
112
```

### Output: deduped_data.csv
```
101
105
117
```

