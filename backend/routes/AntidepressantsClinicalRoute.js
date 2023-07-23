const express = require('express');
const router = express.Router();


const antidepressantsClinicalController = require('../controller/AntidepressantsClinicalController.js');

router.get('/AntidepressantsClinical', antidepressantsClinicalController.getData);
router.post('/AntidepressantsClinical/update', antidepressantsClinicalController.updateData);
router.post("/AntidepressantsClinical/add", antidepressantsClinicalController.addData);
router.delete("/AntidepressantsClinical/delete/:Description", antidepressantsClinicalController.deleteData);

module.exports = router;