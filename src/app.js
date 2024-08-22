const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the file routes
app.use('/files', fileRoutes);

// Start the server
app.listen(port, () => {
    console.log(`NodeJS File System API running at http://localhost:${port}`);
});
