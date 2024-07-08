const express = require('express')
const router = express.Router()
const { validateAdminToken } = require('../middleware/validateToken')
const feedbacksController = require('../controllers/feedbacksController')

// Get All
router.get('/', validateAdminToken, feedbacksController.getAllFeedbacks)

// Get Unreviewed Feedback Count
router.get('/unreviewedCount/', validateAdminToken, feedbacksController.unreviewedFeedbackCounter);

// Get One
router.get('/:id', validateAdminToken, feedbacksController.getOneFeedback)

// Create One
router.post('/', validateAdminToken, feedbacksController.createOneFeedback)

// Update One
router.put('/:id', validateAdminToken, feedbacksController.updateOneFeedback)

// Delete One
router.delete('/:id', validateAdminToken, feedbacksController.deleteOneFeedback)

module.exports = router;