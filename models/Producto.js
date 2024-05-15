const sql = require('../db');

async function obtenerProductosPorCategoria(categoria) {
    const consulta = 'SELECT * FROM productos WHERE categoria = ?';
    const [productos] = await sql.query(consulta, [categoria]);
    return productos;
}

module.exports = { obtenerProductosPorCategoria };
