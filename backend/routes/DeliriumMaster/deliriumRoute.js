const express = require('express');
const router = express.Router();
const deliriumController = require('../../controller/deliriumController.js');

router.route('/')
    .get(deliriumController.getData)
    .post(deliriumController.drugData);

router.route('/:description')
    .put(deliriumController.updateData)
    .delete(deliriumController.drugDelete);

module.exports = router;
