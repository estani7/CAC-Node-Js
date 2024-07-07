const db = require('../db/db');

const getAllProfesionales = (req, res) => {
    const sql = 'SELECT * FROM profesionales';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    })
};

const getProfesionalById = (req, res) => {
    const {id} = req.params
    const sql = 'SELECT * FROM profesionales WHERE id = ? ';

    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
    })
};

const createProfesional = (req, res) => {
    const {nombre, apellido, mail} = req.body;
    const sql = 'INSERT INTO clientes (nombre, apellido, mail) VALUES (?, ?, ?)';

    db.query(sql, [nombre, apellido, mail], (err, results) => {
        if (err) throw err;
        res.json({message: 'Profesional creado', id: results.insertId});
    })
};

const updateProfesional = (req, res) => {
    const {nombre, apellido, mail} = req.body;
    const {id} = req.params;
    const sql = 'UPDATE profesionales SET nombre = ?, apellido = ?, mail = ? WHERE id = ?';

    db.query(sql, [nombre, apellido, mail, id], (err, results) => {
        if (err) throw err;
        res.json({message: 'Profesional actualizado', id: results.insertId});
    })
};

const deleteProfesional = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM profesionales WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json({message: 'Profesional eliminado', id: results.insertId});
    })
};

module.exports = {
    getAllProfesionales,
    getProfesionalById,
    createProfesional,
    updateProfesional,
    deleteProfesional
}