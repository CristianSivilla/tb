const connection = require('../db');

const Carrito = {};

Carrito.agregarProducto = (usuarioId, productoId, cantidad, callback) => {
  const sql = 'INSERT INTO carrito (usuario_id, producto_id, cantidad) VALUES (?, ?, ?)';
  connection.query(sql, [usuarioId, productoId, cantidad], (error, result) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, result);
  });
};

Carrito.obtenerProductosPorUsuarioId = (usuarioId, callback) => {
  const sql = 'SELECT productos.nombre, productos.precio, carrito.cantidad FROM carrito INNER JOIN productos ON carrito.producto_id = productos.id WHERE carrito.usuario_id = ?';
  connection.query(sql, [usuarioId], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results);
  });
};

module.exports = Carrito;
