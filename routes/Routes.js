const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/RegistroController');
const { iniciarSesion } = require('../controllers/LoginController');
const carritoController = require('../controllers/carritoController');


router.post('/agregar', carritoController.agregarProducto);
router.get('/:usuarioId', carritoController.mostrarCarrito);
router.delete('/carrito/:id', carritoController.eliminarProducto);


router.post('/registro', registrarUsuario);
router.post('/login', iniciarSesion);


module.exports = router;
