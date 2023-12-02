const express = require('express')
const router = express.Router()
const { Category, Subcategory, Subcategory_Type, Subcategory_Header, Subcategory_Data } = require('../models')
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken')
const { v4: uuidv4 } = require("uuid")

// Get All
router.get('/', validateUserToken, async (req, res) => {
  try {
    await Subcategory.findAll({
      attributes: {
        exclude: ['SubcategoryTypeId', 'CategoryId']
      }
    })
      .then((message) => { return res.status(200).json(message) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding subcategories' })
  }
})

// Get One
router.get('/:id', validateUserToken, async (req, res) => {
  try {
    await Subcategory.findOne({
      where: { uuid: req.params.id },
      attributes: {
        exclude: ['SubcategoryTypeId', 'CategoryId']
      },
      include: [
        {
          model: Subcategory_Type
        },
        {
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
      ]
    })
      .then((message) => {
        if (!message) return res.status(400).json({ errorMessage: 'Encountered error while finding subcategory' })
        return res.status(200).json(message)
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding subcategory'})
  }
})

// Create One
router.post('/', validateAdminToken, async (req, res) => {
  const { categoryUUID, subcategoryTypeUUID, description } = req.body
  // Sanitize and validate

  try {
    const category = await Category.findOne({
      where: { uuid: categoryUUID }
    }).catch(() => { return res.status(400).json({ errorMessage: 'Category does not exist' }) })

    const subcategory_type = await Subcategory_Type.findOne({
      where: { uuid: subcategoryTypeUUID }
    }).catch(() => { return res.status(400).json({ errorMessage: 'Subcategory type does not exist' }) })

    await Subcategory.create({
      uuid: uuidv4(),
      categoryID: category.id,
      subcategoryTypeID: subcategory_type.id,
      description: description,
    })
      .then((subcategory) => { return res.status(201).json({ message: 'Successfully created subcategory', subcategory }) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while creating subcategory' })
  }
})

// Update One
router.put('/:id', validateAdminToken, async (req, res) => {
  const { categoryUUID, subcategoryTypeUUID, description } = req.body
  // Sanitize and validate

  try {
    const category = await Category.findOne({
      where: { uuid: categoryUUID }
    }).catch(() => { return res.status(400).json({ errorMessage: 'Category does not exist' }) })

    const subcategory_type = await Subcategory_Type.findOne({
      where: { uuid: subcategoryTypeUUID }
    }).catch(() => { return res.status(400).json({ errorMessage: 'Subcategory type does not exist' }) })

    await Subcategory.update({
      categoryID: category.id,
      subcategoryTypeID: subcategory_type.id,
      description: description,
    }, {
      where: { uuid: req.params.id }
    })
      .then((result) => {
        if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while updating subcategory' })
        return res.status(200).json({ message: 'Successfully updated subcategory' })
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while updating subcategory' })
  }
})

// Delete One
router.delete('/:id', validateAdminToken, async (req, res) => {
  try {
    await Subcategory.destroy({
      where: { uuid: req.params.id }
    })
      .then((result) => {
        if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while trying to delete subcategory' })
        return res.status(200).json({ message: 'Successfully deleted subcategory' })
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' })
  }
})

module.exports = router;