const express = require('express');
const router = express.Router();


const AntidepressantsClinicalController = require('../controller/AntidepressantsClinicalController.js');

router.get('/AntidepressantsClinical', AntidepressantsClinicalController.getData);
router.post('/AntidepressantsClinical/update', AntidepressantsClinicalController.updateData);
router.post("/AntidepressantsClinical/add", AntidepressantsClinicalController.addData);
router.delete("/AntidepressantsClinical/delete/:Description", AntidepressantsClinicalController.deleteData);

module.exports = router;