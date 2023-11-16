const express = require('express')
const router = express.Router()
const { Feedback } = require('../models')
const { validateAdminToken } = require('../middleware/validateToken')
const { v4: uuidv4 } = require("uuid")

// Get All
router.get('/', validateAdminToken, async (req, res) => {
  try{
    await Feedback.findAll()
      .then((message) => { return res.status(200).json(message) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding all feedback' })
  }
})

// Get One
router.get('/:id', validateAdminToken, async (req, res) => {
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
})

// Create One
router.post('/', validateAdminToken, async (req, res) => {
  const { name, email, comment, rating, allowEmailBack } = req.body
  // Sanitize and validate

  try {
    await Feedback.create({
      uuid: uuidv4(),
      name: name,
      email: email,
      comment: comment,
      rating: rating,
      allowEmailBack: allowEmailBack,
    })
      .then((feedback) => { return res.status(201).json({ message: 'Successfully created feedback', feedback }) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while creating feedback' })
  }

})

// Update One
router.put('/:id', validateAdminToken, async (req, res) => {
  const { name, email, comment, rating, allowEmailBack } = req.body
  // Sanitize and validate

  try {
    await Feedback.update({
      name: name,
      email: email,
      comment: comment,
      rating: rating,
      allowEmailBack: allowEmailBack,
    }, {
      where: { uuid: req.params.id }
    })
      .then((result) => {
        if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while updating feedback' })
        return res.status(201).json({ message: 'Successfully updated feedback' })
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while updating feedback'})
  }
})

// Delete One
router.delete('/:id', validateAdminToken, async (req, res) => {
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
})

module.exports = router;