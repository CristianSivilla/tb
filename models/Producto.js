const db = require('../db');

async function obtenerProductosPorCategoria(categoria) {
    const consulta = 'SELECT * FROM productos WHERE categoria = ?';
    const [productos] = await db.query(consulta, [categoria]);
    return productos;
}

module.exports = { obtenerProductosPorCategoria };
