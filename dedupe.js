const fs = require('fs');

// Function to read a file and return its lines as an array
function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8').trim().split("\n");
}

// Function to remove records from file1 that also exist in file2
function deduplicate(file1Lines, file2Lines) {
    const file2Set = new Set(file2Lines); // Convert file2 lines into a Set for quick lookup
    return file1Lines.filter(line => !file2Set.has(line)); // Keep only lines not in file2
}

// Function to write output to a file
function writeFile(filePath, data) {
    fs.writeFileSync(filePath, data.join("\n"), 'utf8');
    console.log(`\n✅ Deduplicated file saved as: ${filePath}`);
    console.log(`ℹ️  Number of records in deduped file : ${data.length}`);
}

// Main function to process the files
function processFiles() {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.error("❌ Usage: node dedupe.js <file1.csv> <file2.csv>");
        process.exit(1);
    }

    const [file1, file2] = args;
    const outputFile = (args.length > 2) ? args[2] : "./output-files/deduped_output.csv";

    try {
        const file1Lines = readFile(file1);
        const file2Lines = readFile(file2);

        console.log (`ℹ️  Number of records in file1 (${file1}): ${file1Lines.length}`);
        console.log (`ℹ️  Number of records in file2 (${file2}): ${file2Lines.length}`);
        console.log (`ℹ️  Total number of records in both files: ${file1Lines.length + file2Lines.length}`);

        const dedupedLines = deduplicate(file1Lines, file2Lines);
        writeFile(outputFile, dedupedLines);
    } catch (error) {
        console.error("❌ Error processing files:", error);
    }
}

// Run the script
processFiles();


