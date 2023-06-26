const express = require('express');
const router = express.Router();


const antidepressantGuideController = require('../controller/AntidepressantGuideController.js');

router.get('/AntidepressantGuide', antidepressantGuideController.getData);


module.exports = router;