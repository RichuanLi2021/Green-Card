const express = require("express");
const router = express.Router();

const MoodStabilizersController = require("../controller/MoodStabilizersController.js");

router.get("/MoodStabilizers", MoodStabilizersController.MoodStabilizersController.getData);
router.post("/MoodStabilizers/update", MoodStabilizersController.updateMoodStabilzerControllerData);

module.exports = router;
