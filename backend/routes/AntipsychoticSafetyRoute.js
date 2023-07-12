const express = require('express');
const router = express.Router();


const antipsychoticSafetyController = require('../controller/AntipsychoticSafetyController.js');

router.get('/AntipsychoticSafety', antipsychoticSafetyController.getData);
router.post('/AntipsychoticSafety/update', antipsychoticSafetyController.updateData);

module.exports = router;