const express = require('express');
const router = express.Router();


const antidepressantGuideController = require('../controller/AntidepressantGuideController.js');

router.get('/AntidepressantGuide', antidepressantGuideController.getData);
router.post('/AntidepressantGuide/update', antidepressantGuideController.updateData);
router.post("/AntidepressantGuide/add", antidepressantGuideController.addData);
router.delete("/AntidepressantGuide/delete/:Name", antidepressantGuideController.deleteData);

module.exports = router;