const router = require('express').Router();
const multer = require('multer');
const imageUploadController = require('../Controllers/upload');

router.get('/:id', imageUploadController.imageGet);
router.post('/', multer().single('file'), imageUploadController.imagePost);

module.exports = router;