const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up static file serving
app.use(express.static(path.join(__dirname, 'src', 'assets')));

// Endpoint for audio streaming
app.get('/stream/:file', (req, res) => {
  const filePath = path.join(__dirname, 'src', 'assets', req.params.file);
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
const ffmpeg = require('fluent-ffmpeg');

function streamAudio(filePath, res) {
  ffmpeg(filePath)
    .audioBitrate(320)
    .format('mp3')
    .pipe(res, { end: true });
}
const axios = require('axios');

async function fetchMusicData() {
  const response = await axios.get('https://api.example.com/free-music');
  return response.data;
}
