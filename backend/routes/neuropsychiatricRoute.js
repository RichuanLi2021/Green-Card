const express = require('express');
const router = express.Router();


const neuropsychiatricController = require('../controller/neuropsychiatricController.js');

router.get('/Neuropsychiatric', neuropsychiatricController.getData);
router.post('/Neuropsychiatric/update', neuropsychiatricController.updateData);
router.post('/add/Neuropsychiatric', neuropsychiatricController.drugData);

module.exports = router;