// LoginController.js
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

async function iniciarSesion(req, res) {
    const { correo, contrasena } = req.body;

    try {
        const usuario = await Usuario.obtenerUsuarioPorCorreo(correo);
        if (!usuario || usuario.contrasena !== contrasena) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ usuarioId: usuario.id }, 'tu_secreto');

        res.json({ mensaje: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { iniciarSesion };
