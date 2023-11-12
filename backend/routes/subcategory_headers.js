const express = require('express');
const router = express.Router();
const { Subcategory_Header } = require('../models')
const { validateUserToken, validateAdminToken } = require('../middleware/validate')

// Get All
router.get('/', validateUserToken, async (req, res) => {
  try {
    await Subcategory_Header.findAll()
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }

})

// Get One
router.get('/:id', validateUserToken, async (req, res) => {
  try {
    await Subcategory_Header.findOne({ where: { id: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Create One
router.post('/', validateAdminToken, async (req, res) => {
  const { subcategoryID, title, abbreviation, description } = req.body
  // Add input validation

  try {
    await Subcategory_Header.create({
      subcategoryID: subcategoryID,
      title: title,
      abbreviation: abbreviation,
      description: description,
    }).then((message) => { return res.status(201).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Update One
router.put('/:id', validateAdminToken, async (req, res) => {
  const { subcategoryID, title, abbreviation, description } = req.body
// Add input validation

  try {
    await Subcategory_Header.update({
      subcategoryID: subcategoryID,
      title: title,
      abbreviation: abbreviation,
      description: description,
    }, { where: { id: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Delete One
router.delete('/:id', validateAdminToken, async (req, res) => {
  try {
    await Subcategory_Header.destroy({ where: { id: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

module.exports = router;