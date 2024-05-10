
const Carrito = require('../models/carritoModel');

const carritoController = {};

carritoController.agregarProducto = (req, res) => {
  const { usuarioId, productoId, cantidad } = req.body;
  Carrito.agregarProducto(usuarioId, productoId, cantidad, (error, result) => {
    if (error) {
      return res.status(500).json({ error: 'Error al agregar el producto al carrito' });
    }
    res.json({ mensaje: 'Producto agregado al carrito correctamente' });
  });
};

carritoController.mostrarCarrito = (req, res) => {
  const usuarioId = req.params.usuarioId;
  Carrito.obtenerProductosPorUsuarioId(usuarioId, (error, resultados) => {
    if (error) {
      return res.status(500).json({ error: 'Error al obtener el carrito del usuario' });
    }
    res.json(resultados);
  });
};


carritoController.eliminarProducto = async (req, res) => {
  try {
    const productoId = req.params.id;
    await Carrito.eliminarProducto(productoId);
    res.json({ mensaje: 'Producto eliminado del carrito correctamente' });
  } catch (error) {
    console.error('Error al eliminar el producto del carrito:', error);
    res.status(500).json({ error: 'Error al eliminar el producto del carrito' });
  }
};



module.exports = carritoController;
