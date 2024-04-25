// registroRoutes.js
const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/RegistroController');
const { iniciarSesion } = require('../controllers/LoginController');

router.post('/registro', registrarUsuario);
router.post('/login', iniciarSesion);

module.exports = router;
