const express = require('express');
const router = express.Router();
const principlesPolypharmacyController = require('../../controller/PrinciplesPolypharmacyController.js');

router.route('/principles-polypharmacy')
    .get(principlesPolypharmacyController.getData)
    .post(principlesPolypharmacyController.addData);

router.route('/principles-polypharmacy/:Description')
    .put(principlesPolypharmacyController.updateData)
    .delete(principlesPolypharmacyController.deleteData);

module.exports = router;
