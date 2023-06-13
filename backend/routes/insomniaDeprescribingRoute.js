const express = require('express');
const router = express.Router();


const insomniaDeprescribingController = require('../controller/InsomniaDeprescribingController.js');

router.get('/InsomniaDeprescribing', insomniaDeprescribingController.getData);


module.exports = router;