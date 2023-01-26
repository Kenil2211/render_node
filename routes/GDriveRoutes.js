const express = require('express');
const router = express.Router();
const uploadController = require('../controller/GDriveUploadConroller');

router.post('/upload',uploadController.uploadFile);
router.get('/getfiles',uploadController.getAllFileFromGoogleDrive)


module.exports = router;