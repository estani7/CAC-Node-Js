const db = require('../db/db');

const getAllServicios = (req, res) => {
    const sql = 'SELECT * FROM servicios';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    })
};

const getServicioById = (req, res) => {
    const {id} = req.params
    const sql = 'SELECT * FROM servicios WHERE id = ? ';

    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
    })
};

const createServicio = (req, res) => {
    const {tipo, costo} = req.body;
    const sql = 'INSERT INTO servicios (tipo, costo) VALUES (?, ?)';

    db.query(sql, [tipo, costo], (err, results) => {
        if (err) throw err;
        res.json({message: 'Servicio creado', id: results.insertId});
    })
};

const updateServicio = (req, res) => {
    const {tipo, costo} = req.body;
    const {id} = req.params;
    const sql = 'UPDATE servicios SET tipo = ?, costo = ? WHERE id = ?';

    db.query(sql, [tipo, costo, id], (err, results) => {
        if (err) throw err;
        res.json({message: 'Servicio actualizado', id: results.insertId});
    })
};

const deleteServicio = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM servicios WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json({message: 'Servicio eliminado', id: results.insertId});
    })
};

module.exports = {
    getAllServicios,
    getServicioById,
    createServicio,
    updateServicio,
    deleteServicio
}