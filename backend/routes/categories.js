const express = require('express');
const router = express.Router();
const { Category } = require('../models')

// Get All
router.get('/', async (req, res) => {
  try {
    await Category.findAll()
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Get One
router.get('/:id', async (req, res) => {
  try {
    await Category.findAll({ where: { id: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Create One
router.post('/', async (req, res) => {
  const { title, description } = req.body
  // Add input validation

  try {
    await Category.create({
      title: title,
      description: description,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then((message) => { return res.status(201).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Update One
router.put('/:id', async (req, res) => {
  const { title, description } = req.body
  // Add input validation

  try {
    await Category.update({
      title: title,
      description: description,
      createdAt: new Date(),
      updatedAt: new Date()
    }, { where: { id: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Delete One
router.delete('/:id', async (req, res) => {
  try {
    await Category.destroy({ where: { id: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

module.exports = router;