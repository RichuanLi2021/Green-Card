const express = require('express');
const router = express.Router();


const principlesPolypharmacyController = require('../controller/PrinciplesPolypharmacyController.js');


router.get('/PrinciplesPolypharmacy', principlesPolypharmacyController.getData);
router.post("/PrinciplesPolypharmacy/update", principlesPolypharmacyController.updateData);
router.post('/add/PrinciplesPolypharmacy', principlesPolypharmacyController.addData);
router.delete('/PrinciplesPolypharmacy/delete/:Description',principlesPolypharmacyController.deleteData);

module.exports = router;