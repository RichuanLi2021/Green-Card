const express = require('express');
const router = express.Router();


const InsomniaSafetyController = require('../controller/InsomniaSafetyController.js');

router.get('/InsomniaSafety', InsomniaSafetyController.getData);
router.post('/InsomniaSafety/update', InsomniaSafetyController.updateData);
router.post('/add/InsomniaSafety', InsomniaSafetyController.drugData);
router.delete('/insomniasafety/delete/:Description',InsomniaSafetyController.drugDelete);

module.exports = router;