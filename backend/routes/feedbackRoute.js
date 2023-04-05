const express = require('express');
const router = express.Router();

const feedbackController = require('../controller/feedbackController');
router.post('/submit-feedback', feedbackController.postFeedback);
router.get('/get-feedback', feedbackController.getFeedback);

module.exports = router;