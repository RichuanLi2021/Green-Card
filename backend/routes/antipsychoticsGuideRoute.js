const express = require("express");
const router = express.Router();
const apController = require("../controller/antipsychoticsGuideController");

router.get("/antipsychoticsGuide", apController.getData);
router.post("/antipsychoticsGuide/update", apController.updateData);
router.post("/antipsychoticsGuide/add", apController.addData);
router.delete("/antipsychotics/:name", deleteDataByName);

module.exports = router;
