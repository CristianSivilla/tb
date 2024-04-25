const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/RegistroController');
const { iniciarSesion } = require('../controllers/LoginController');
const verificarToken = require('../middlewares/verificarTokens');

router.post('/registro', registrarUsuario);
router.post('/login', iniciarSesion);
router.get('/ruta-protegida', verificarToken, (req, res) => {
    res.json({ mensaje: 'Acceso autorizado' });
});

module.exports = router;
