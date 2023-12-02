const express = require('express')
const router = express.Router()
const { Subcategory, Subcategory_Type, Subcategory_Header, Subcategory_Data } = require('../models')
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken')
const { v4: uuidv4 } = require("uuid")

// Get All
router.get('/', validateUserToken, async (req, res) => {
  try {
    await Subcategory_Type.findAll()
      .then((message) => { return res.status(200).json(message) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding subcategory types' })
  }
})

// Get One
router.get('/:id', validateUserToken, async (req, res) => {
  try {
    await Subcategory_Type.findOne({
      where: { uuid: req.params.id },
      include: {
        model: Subcategory,
        attributes: {
          exclude: ['SubcategoryTypeId', 'CategoryId']
        },
        include: {
          model: Subcategory_Header,
          attributes: {
            exclude: ['SubcategoryId']
          },
          include: {
            model: Subcategory_Data,
            attributes: {
              exclude: ['SubcategoryHeaderId']
            }
          }
        }
      }

    })
      .then((message) => {
        if (!message) return res.status(400).json({ errorMessage: 'Encountered error while finding subcategory type' })
        return res.status(200).json(message)
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding subcategory type' })
  }
})

// Create One
router.post('/', validateAdminToken, async (req, res) => {
  const { title } = req.body
  // Sanitize and validate

  try {
    await Subcategory_Type.create({
      uuid: uuidv4(),
      title: title,
    })
      .then((subcategory_type) => { return res.status(201).json({ message: 'Successfully created subcategory type', subcategory_type }) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while creating subcategory type' })
  }
})

// Update One
router.put('/:id', validateAdminToken, async (req, res) => {
  const { title } = req.body
  // Sanitize and validate

  try {
    await Subcategory_Type.update({
      title: title,
    }, {
      where: { uuid: req.params.id }
    })
      .then((result) => {
        if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while updating subcategory type' })
        return res.status(200).json({ message: 'Successfully updated subcategory type' })
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while updating subcategory type' })
  }
})

// Delete One
router.delete('/:id', validateAdminToken, async (req, res) => {
  try {
    await Subcategory_Type.destroy({
      where: { uuid: req.params.id }
    })
      .then((result) => {
        if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while deleting subcategory type' })
        return res.status(200).json({ message: 'Successfully deleted subcategory type' })
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while deleting subcategory type' })
  }
})

module.exports = router;