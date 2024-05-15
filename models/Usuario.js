const sql = require('../db');

class Usuario {
    static registrarUsuario(usuario) {
        return new Promise((resolve, reject) => {
            sql.query('INSERT INTO usuarios SET ?', usuario, (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results.insertId);
            });
        });
    }

    static obtenerUsuarioPorCorreo(correo) {
        return new Promise((resolve, reject) => {
            sql.query('SELECT * FROM usuarios WHERE correo = ?', correo, (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results[0]);
            });
        });
    }
}

module.exports = Usuario;
