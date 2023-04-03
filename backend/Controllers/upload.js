const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const imagePath = (imageId, ext = '') => {
    return path.join(__dirname, `../Storage/${imageId}${ext}`);
}

const imageGet = (req, res)  => {
    const { id } = req.params;
    res.sendFile(imagePath(id));
}
const imagePost = (req, res) => {
    const imgId = uuidv4();
    const fileExtension = path.extname(req.file.originalname);
    fs.writeFileSync(imagePath(imgId, fileExtension), req.file.buffer);
    res.json({ id: imgId });
} 

module.exports = {
    imageGet,
    imagePost,
}