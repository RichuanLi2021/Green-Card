const express = require("express");
const router = express.Router();

const MoodStabilizersController = require("../controller/MoodStabilizersController.js");

router.get("/MoodStabilizers", MoodStabilizersController.getData);
router.post("/MoodStabilizers/update", MoodStabilizersController.updateData);
router.post("/add/MoodStabilizers", MoodStabilizersController.drugData);
router.delete("/MoodStabilizers/delete/:Name", MoodStabilizersController.drugDelete);


module.exports = router;
