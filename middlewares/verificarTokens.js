const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    jwt.verify(token, 'clave', (error, decoded) => {
        if (error) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        req.usuarioId = decoded.usuarioId;
        next();
    });
}

module.exports = verificarToken;
