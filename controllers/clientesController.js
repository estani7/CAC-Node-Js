const db = require('../db/db');

const getAllClientes = (req, res) => {
    const sql = 'SELECT * FROM clientes';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    })
};

const getClienteById = (req, res) => {
    const {id} = req.params
    const sql = 'SELECT * FROM clientes WHERE id = ? ';

    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
    })
};

const createCliente = (req, res) => {
    const {nombre, apellido, mail, telefono} = req.body;
    const sql = 'INSERT INTO clientes (nombre, apellido, mail, telefono) VALUES (?, ?, ?, ?)';

    db.query(sql, [nombre, apellido, mail, telefono], (err, results) => {
        if (err) throw err;
        res.json({message: 'Cliente creado', id: results.insertId});
    })
};

const updateCliente = (req, res) => {
    const {nombre, apellido, mail, telefono} = req.body;
    const {id} = req.params;
    const sql = 'UPDATE clientes SET nombre = ?, apellido = ?, mail = ?, telefono = ? WHERE id = ?';

    db.query(sql, [nombre, apellido, mail, telefono, id], (err, results) => {
        if (err) throw err;
        res.json({message: 'Cliente actualizado', id: results.insertId});
    })
};

const deleteCliente = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM clientes WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json({message: 'Cliente eliminado', id: results.insertId});
    })
};

module.exports = {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
}