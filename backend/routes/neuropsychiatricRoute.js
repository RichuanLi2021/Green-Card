const express = require('express');
const router = express.Router();


const neuropsychiatricController = require('../controller/neuropsychiatricController.js');

router.get('/Neuropsychiatric', neuropsychiatricController.getData);
router.post('/Neuropsychiatric/update', neuropsychiatricController.updateData);
router.post('/add/Neuropsychiatric', neuropsychiatricController.drugData);
router.delete('/Neuropsychiatric/delete/:Medication',neuropsychiatricController.drugDelete);

module.exports = router;