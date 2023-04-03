const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const imageUploadRouter = require('./Routes/upload');
const cors = require('cors');

app.use(cors());
app.use(express.static('Public'));
app.use('/image', imageUploadRouter);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));