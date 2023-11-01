const express = require('express');
const router = express.Router();
const insomniaDeprescribingController = require('../../controller/InsomniaDeprescribingController.js');

router.route('/insomnia-deprescribing')
    .get(insomniaDeprescribingController.getData)
    .post(insomniaDeprescribingController.drugData);

router.route('/insomnia-deprescribing/:Duration')
    .delete(insomniaDeprescribingController.drugDelete);

module.exports = router;
