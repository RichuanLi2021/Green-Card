const { Feedback } = require('../models')
const { v4: uuidv4 } = require("uuid")


//Get all feedbacks
exports.getAllFeedbacks = async(req, res) => {
    try{
        await Feedback.findAll()
          .then((message) => { return res.status(200).json(message) })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding all feedback' })
      }
}


// Get Unreviewed Feedback Count
exports.unreviewedFeedbackCounter = async(req, res) => {
    try {
        const count = await Feedback.count({
          where: { reviewed: false }
        });
        return res.status(200).json({ count: count });
      } catch (error) {
        console.error('Error counting unreviewed feedback:', error);
        return res.status(500).json({ error: 'Encountered unexpected error while counting unreviewed feedback' });
      }
}


//Get one feedback
exports.getOneFeedback = async(req, res) => {
    try {
        await Feedback.findOne({
          where: { uuid: req.params.id }
        })
          .then((message) => {
            if (!message) return res.status(400).json({ errorMessage: 'Encountered error while finding feedback' })
            return res.status(200).json(message)
          })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding feedback' })
      }
}


// Create one
exports.createOneFeedback = async(req, res) => {
    const { name, email, comment, rating, allowEmailBack, reviewed } = req.body
    const alphanumericRegex = /^[a-zA-Z0-9\s,:]+/;

  // Check if input fields contain only valid characters
  if (!alphanumericRegex.test(name) || !alphanumericRegex.test(email) || !alphanumericRegex.test(comment)) {
    return res.status(400).json({ errorMessage: 'Input contains invalid characters' });
  }

  try {
    const feedback = await Feedback.create({
      uuid: uuidv4(),
      name: name,
      email: email,
      comment: comment,
      rating: rating,
      allowEmailBack: allowEmailBack,
      reviewed: reviewed,
    });

    return res.status(201).json({ message: 'Successfully created feedback', feedback });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while creating feedback' });
  }
}

// Update one
exports.updateOneFeedback = async(req, res) => {
    const { name, email, comment, rating, allowEmailBack, reviewed } = req.body
  // Sanitize and validate

  try {
    await Feedback.update({
      name: name,
      email: email,
      comment: comment,
      rating: rating,
      allowEmailBack: allowEmailBack,
      reviewed: reviewed,
    }, {
      where: { uuid: req.params.id }
    })
    return res.status(201).json({ message: 'Successfully updated feedback' })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while updating feedback'})
  }
}

// Delete one
exports.deleteOneFeedback = async(req, res) => {
    try {
        await Feedback.destroy({
          where: { uuid: req.params.id }
        })
          .then((result) => {
            if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while deleting feedback' })
            return res.status(200).json({ message: 'Successfully deleted feedback' })
          })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while deleting feedback' })
      }
}