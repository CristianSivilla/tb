const Usuario = require('../models/Usuario');

async function iniciarSesion(req, res) {
    const { correo, contrasena } = req.body;

    try {
        const usuario = await Usuario.obtenerUsuarioPorCorreo(correo);
        if (!usuario || usuario.contrasena !== contrasena) {
            return res.status(401).json({ error: 'error en las creedenciales' });
        }

        res.json({ mensaje: 'Bienvenido', usuario });
    } catch (error) {
        console.error('Error en el inicio sesión:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
}

module.exports = { iniciarSesion };
