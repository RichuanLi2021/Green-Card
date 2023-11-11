const express = require('express')
const router = express.Router()
const { validateToken } = require("../middleware/validate")
const { Subcategory } = require('../models')


// Get All
router.get('/', validateToken, async (req, res) => {
  try {
    await Subcategory.findAll()
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Get One
router.get('/:id', validateToken, async (req, res) => {
  try {
    await Subcategory.findOne({ where: { id: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Create One
router.post('/', validateToken, async (req, res) => {
  const { categoryID, subcategoryTypeID, description} = req.body
  // Add input validation

  try {
    await Subcategory.create({
      categoryID: categoryID,
      subcategoryTypeID: subcategoryTypeID,
      description: description,
    }).then((message) => { return res.status(201).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Update One
router.put('/:id', validateToken, async (req, res) => {
  const { categoryID, subcategoryTypeID, description} = req.body
  // Add input validation

  try {
    await Subcategory.update({
      categoryID: categoryID,
      subcategoryTypeID: subcategoryTypeID,
      description: description,
    }, { where: { id: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Delete One
router.delete('/:id', validateToken, async (req, res) => {
  try {
    await Subcategory.destroy({ where: { id: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

module.exports = router;