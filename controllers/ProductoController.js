const Producto = require('../models/Producto');

async function obtenerProductosPorCategoria(req, res) {
    const categoria = req.params.categoria;

    try {
        const productos = await Producto.obtenerProductosPorCategoria(categoria);

        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos por categoría:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { obtenerProductosPorCategoria };
