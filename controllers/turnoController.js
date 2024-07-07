const db = require('../db/db');

const getAllTurnos = (req, res) => {
    const sql = 'SELECT * FROM turnos';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    })
};

const getTurnoById = (req, res) => {
    const {id} = req.params
    const sql = 'SELECT * FROM turnos WHERE id = ? ';

    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
    })
};

const createTurno = (req, res) => {
    const {id_cliente, id_profesional, id_servicio, fecha} = req.body;
    const sql = 'INSERT INTO turnos (id_cliente, id_profesional, id_servicio, fecha) VALUES (?, ?, ?, ?)';

    db.query(sql, [id_cliente, id_profesional, id_servicio, fecha], (err, results) => {
        if (err) throw err;
        res.json({message: 'Turno creado', id: results.insertId});
    })
};

const updateTurno = (req, res) => {
    const {id_cliente, id_profesional, id_servicio, fecha} = req.body;
    const {id} = req.params;
    const sql = 'UPDATE turnos SET id_cliente = ?, id_profesional = ?, id_servicio = ?, fecha = ? WHERE id = ?';

    db.query(sql, [id_cliente, id_profesional, id_servicio, fecha, id], (err, results) => {
        if (err) throw err;
        res.json({message: 'Turno actualizado', id: results.insertId});
    })
};

const deleteTurno = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM turnos WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json({message: 'Turno eliminado', id: results.insertId});
    })
};

module.exports = {
    getAllTurnos,
    getTurnoById,
    createTurno,
    updateTurno,
    deleteTurno
}