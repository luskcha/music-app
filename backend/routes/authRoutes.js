const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Supongo que tienes un modelo User

// Ruta de registro
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const newUser = new User({ username, password, email });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

module.exports = router;
