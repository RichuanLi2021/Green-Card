const express = require('express');
const router = express.Router();
const { Category, Subcategory, Subcategory_Type, Subcategory_Header, Subcategory_Data } = require('../models')
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken')
const { v4: uuidv4 } = require("uuid")

// Get All
router.get('/', validateUserToken, async (req, res) => {
  try {
    await Subcategory_Data.findAll({
      attributes: {
        exclude: ['SubcategoryHeaderId']
      }
    })
      .then((message) => { return res.status(200).json(message) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding all subcategory data' })
  }
})

// Get One
router.get('/:id', validateUserToken, async (req, res) => {
 try {
    await Subcategory_Data.findOne({
      where: { uuid: req.params.id },
      attributes: {
        exclude: ['SubcategoryHeaderId']
      },
      include: {
        model: Subcategory_Header,
        include: [
          {
            model: Subcategory,
            include: [
              { model: Subcategory_Type },
              { model: Category }
            ]
          }
        ]
      }
    })
      .then((message) => {
        if (!message) return res.status(400).json({ errorMessage: 'Encountered error while finding subcategory data' })
        return res.status(200).json(message)
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding subcategory data' })
  }
})

// Create One
router.post('/', validateAdminToken, async (req, res) => {
    const { headerUUID, value } = req.body
    // Sanitize and validate

    try {
      const subcategory_header = await Subcategory_Header.findOne({
        where: { uuid: headerUUID }
      }).catch(() => { return res.status(400).json({ errorMessage: 'Subcategory header does not exist' }) })

      await Subcategory_Data.create({
        uuid: uuidv4(),
        headerID: subcategory_header.id,
        value: value,
      })
        .then((subcategory_data) => { return res.status(201).json({ message: 'Successfully created subcategory data', subcategory_data }) })
        .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while creating subcategory data' })
      }
})

// Update One
router.put('/:id', validateAdminToken, async (req, res) => {
    const { headerUUID, value } = req.body
    // Sanitize and validate

    try {
      const subcategory_header = await Subcategory_Header.findOne({
        where: { uuid: headerUUID }
      }).catch(() => { return res.status(400).json({ errorMessage: 'Subcategory header does not exist' }) })

      await Subcategory_Data.update({
        headerID: subcategory_header.id,
        value: value,
      }, {
        where: { uuid: req.params.id }
      })
        .then((result) => {
          if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while updating subcategory data' })
          return res.status(200).json({ message: 'Successfully updated subcategory data' })
        })
        .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while updating subcategory data' })
      }
})

// Delete One
router.delete('/:id', validateAdminToken, async (req, res) => {
    try {
        await Subcategory_Data.destroy({
          where: { uuid: req.params.id }
        })
          .then((result) => {
            if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while deleting subcategory data' })
            return res.status(200).json({ message: 'Successfully deleted subcategory data' })
          })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while deleting subcategory data' })
      }
})

module.exports = router;