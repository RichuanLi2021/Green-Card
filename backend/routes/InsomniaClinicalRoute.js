const express = require('express');
const router = express.Router();


const InsomniaClinicalController = require('../controller/InsomniaClinicalController.js');

router.get('/InsomniaClinical', InsomniaClinicalController.getData);
router.post("/InsomniaClinical/update", InsomniaClinicalController.updateData);
router.post('/add/Insomnia/Clinical', InsomniaClinicalController.drugData);
router.delete('/clinical/delete/:Description',InsomniaClinicalController.drugDelete);

module.exports = router;