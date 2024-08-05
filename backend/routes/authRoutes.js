const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Ruta de registro
router.post('/register', registerUser);

// Ruta de login
router.post('/login', loginUser);

module.exports = router;
