const express = require("express");
const router = express.Router();

const antipsychoticSafetyController = require("../controller/AntipsychoticSafetyController.js");

router.get("/AntipsychoticSafety", antipsychoticSafetyController.getData);
router.post("/AntipsychoticSafety/update", antipsychoticSafetyController.updateData);
router.post("/AntipsychoticSafety/add", antipsychoticSafetyController.addData);

module.exports = router;
