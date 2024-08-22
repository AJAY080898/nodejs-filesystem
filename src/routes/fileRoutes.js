const express = require('express');
const fileController = require('../controllers/fileController');
const router = express.Router();

// Route to create a file
router.post('/create', fileController.createFile);

// Route to retrieve all files
router.get('/list', fileController.getFiles);

module.exports = router;
