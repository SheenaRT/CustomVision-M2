const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');
const multer = require('multer');
const https = require('https');
require('dotenv').config();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(express.json());
app.use(cors());

const classifyUploadImage = async (req, res) => {
  const imageBuffer = req.file.buffer;

  // Custom Vision API endpoint and prediction key
  const apiUrl =
    'https://carrecognition-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/ec0a3564-e910-4696-85c0-4bfc5bcad21c/classify/iterations/Iteration2/image';
  const predictionKey = 'deada5e2d236460abff2bf2b0c9f1616';

  try {
    const response = await axios.post(apiUrl, imageBuffer, {
      headers: {
        'Prediction-Key': predictionKey,
        'Content-Type': 'application/octet-stream',
      },
    });

    // Respond with the classification result
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

app.post('/classifyuploadimage', upload.single('image'), classifyUploadImage);

module.exports = {
  classifyUploadImage,
};
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server confirmed for http://localhost:${PORT}`);
});
