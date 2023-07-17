const express = require('express');
const router = express.Router();


const insomniaDeprescribingController = require('../controller/InsomniaDeprescribingController.js');

router.get('/InsomniaDeprescribing', insomniaDeprescribingController.getData);
router.post('/InsomniaDeprescribing/update', insomniaDeprescribingController.updateData);
router.post('/add/InsomniaDeprescribing', insomniaDeprescribingController.drugData);
router.delete('/delete/:Duration',insomniaDeprescribingController.drugDelete);


module.exports = router;