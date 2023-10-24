const express = require('express');
const router = express.Router();
const controller = require('../../controller/AntidepressantGuideController.js');

router.route('/')
    .get(controller.getData)  
    .post(controller.addData);  

router.route('/update')
    .post(controller.updateData);  

router.route('/delete/:Name')
    .delete(controller.deleteData); 

module.exports = router;
