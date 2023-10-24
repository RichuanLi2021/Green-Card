const express = require("express");
const router = express.Router();
const MoodStabilizersController = require("../../controller/MoodStabilizersController.js");

router.route('/mood-stabilizers')
    .get(MoodStabilizersController.getData)
    .post(MoodStabilizersController.drugData);

router.route('/mood-stabilizers/:Name')
    .put(MoodStabilizersController.updateData)
    .delete(MoodStabilizersController.drugDelete);

module.exports = router;
