const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/RegistroController');
const { iniciarSesion } = require('../controllers/LoginController');
const { obtenerProductosPorCategoria } = require('../controllers/ProductoController');

router.post('/registro', registrarUsuario);
router.post('/login', iniciarSesion);
router.get('/productos/:categoria', obtenerProductosPorCategoria);

module.exports = router;
