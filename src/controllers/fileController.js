const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, '../files');

// Ensure the folder exists
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

// Function to create a file with the current date-time as the name
exports.createFile = (req, res) => {
    const now = new Date();
    const dateTime = now.toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/:/g, '-');
    const filename = `${dateTime}.txt`;
    const filepath = path.join(folderPath, filename);
    const content = now.toString();

    fs.writeFile(filepath, content, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create file' });
        }
        res.status(201).json({ message: 'File created', filename });
    });
};

// Function to retrieve all text files in the folder
exports.getFiles = (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve files' });
        }
        const textFiles = files.filter(file => path.extname(file) === '.txt');
        res.status(200).json({ files: textFiles });
    });
};
