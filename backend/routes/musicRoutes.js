const express = require('express');
const router = express.Router();

// Simulación de datos de canciones
const songs = [
  { id: 1, title: 'Song One', artist: 'Artist A', url: '/path/to/song1.mp3' },
  { id: 2, title: 'Song Two', artist: 'Artist B', url: '/path/to/song2.mp3' },
  { id: 3, title: 'Song Three', artist: 'Artist C', url: '/path/to/song3.mp3' },
];

router.get('/songs', (req, res) => {
  res.json(songs);
});

module.exports = router;
