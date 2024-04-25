const Usuario = require('../models/Usuario');

async function registrarUsuario(req, res) {
    const { nombre, apellido, correo, contrasena } = req.body;

    try {
        const usuarioExistente = await Usuario.obtenerUsuarioPorCorreo(correo);
        if (usuarioExistente) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        const nuevoUsuario = {
            nombre,
            apellido,
            correo,
            contrasena
        };

        const usuarioId = await Usuario.registrarUsuario(nuevoUsuario);
        res.json({ id: usuarioId, mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { registrarUsuario };
