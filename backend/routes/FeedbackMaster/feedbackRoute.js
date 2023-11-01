const express = require('express');
const router = express.Router();
const feedbackController = require('../../controller/feedbackController');

router.route('/feedback')
    .post(feedbackController.postFeedback)
    .get(feedbackController.getFeedback);

module.exports = router;
