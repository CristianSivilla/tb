-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS sivilla;

-- Uso de la base de datos
USE sivilla;

-- Creación de la tabla `productos`
CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  categoria VARCHAR(50) NOT NULL
);

-- Inserción de productos
INSERT INTO productos (id, nombre, descripcion, precio, categoria)
VALUES 
(4, 'opalo', 'Un ópalo radiante que refleja los colores del arco iris.', 20.00, 'opalo'),
(1, 'perla', 'Una hermosa perla natural, perfecta para adornar tus creaciones.', 10.00, 'perla'),
(2, 'fornitura', 'Una elegante fornitura para complementar tus diseños con estilo.', 2.00, 'fornitura'),
(3, 'piedra Sintetica', 'Una elegante piedra sintética.', 1.00, 'sintetica'),
(5, 'utensilios', 'Un conjunto de herramientas de alta calidad.', 10.00, 'utensilios'),
(6, 'estuche', 'Un elegante estuche para organizar y proteger tus herramientas de joyería.', 5.00, 'estuche'),
(7, 'cuero', 'Una selección de cuero.', 6.00, 'cuero'),
(8, 'circonita', 'Una circonita brillante.', 1.00, 'circonita');

-- Creación de la tabla `usuarios`
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  contrasena VARCHAR(100) NOT NULL,
  esadmin TINYINT(1) NOT NULL DEFAULT 0,
  UNIQUE (correo)
);

-- Inserción de usuario
INSERT INTO usuarios (nombre, apellido, correo, contrasena, esadmin)
VALUES ('Cristian', 'Sivillà', 'cristian@gmail.com', '12345', 0);

-- Creación de la tabla `carrito`
CREATE TABLE IF NOT EXISTS carrito (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  producto_id INT,
  cantidad INT NOT NULL DEFAULT 1,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);
