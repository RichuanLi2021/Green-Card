const express = require('express');
const router = express.Router();
const InsomniaSedativesGuideController = require('../../controller/InsomniaSedativesGuideController.js');

router.route('/insomnia-sedatives')
    .get(InsomniaSedativesGuideController.getData)
    .post(InsomniaSedativesGuideController.drugData);

router.route('/insomnia-sedatives/:Name')
    .put(InsomniaSedativesGuideController.updateData)
    .delete(InsomniaSedativesGuideController.drugDelete);

module.exports = router;
