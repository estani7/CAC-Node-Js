const express = require('express');
const router = express.Router();
const profesionalesController = require('../controllers/profesionalesController');

router.get('/', profesionalesController.getAllProfesionales);

router.get('/:id', profesionalesController.getProfesionalById);

router.post('/', profesionalesController.createProfesional);

router.put('/:id', profesionalesController.updateProfesional);

router.delete('/:id', profesionalesController.deleteProfesional);

module.exports = router; 