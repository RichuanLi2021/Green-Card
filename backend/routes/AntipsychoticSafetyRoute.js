const express = require("express");
const router = express.Router();

const antipsychoticSafetyController = require("../controller/AntipsychoticSafetyController.js");

router.get("/AntipsychoticSafety", antipsychoticSafetyController.getData);
router.post("/AntipsychoticSafety/update", antipsychoticSafetyController.updateData);
router.post("/AntipsychoticSafety/add", antipsychoticSafetyController.addData);
router.delete("/AntipsychoticsSafety/delete/:Description", antipsychoticSafetyController.deleteData);

module.exports = router;
