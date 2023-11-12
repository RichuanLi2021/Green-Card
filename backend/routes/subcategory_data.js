const express = require('express');
const router = express.Router();
const { Subcategory_Data } = require('../models')
const { validateUserToken, validateAdminToken } = require('../middleware/validate')

// Get All
router.get('/', validateUserToken, async (req, res) => {
    try {
        await Subcategory_Data.findAll()
        .then((message) => { return res.status(200).json({message}) })
        .catch((err) => { return res.status(400).json(err) })
    } catch (err) {
        return res.status(500).json(err)
    }
})

// Get One
router.get('/:id', validateUserToken, async (req, res) => {
 try {
    await Subcategory_Data.findOne({ where: { id: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Create One
router.post('/', validateAdminToken, async (req, res) => {
    const { headerID, value } = req.body
    //Add input validation

    try {
        await Subcategory_Data.create({
            headerID: headerID,
            value: value,
        }).then((message) => { return res.status(201).json({message}) })
          .catch((err) => { return res.status(400).json(err) })
      } catch (err) {
        return res.status(500).json(err)
      }
})

// Update One
router.put('/:id', validateAdminToken, async (req, res) => {
    const { headerID, value } = req.body
    // Add input validation

    try {
        await Subcategory_Data.update({
          headerID: headerID,
          value: value,
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
        await Subcategory_Data.destroy({ where: { id: req.params.id } })
          .then((message) => { return res.status(200).json({message}) })
          .catch((err) => { return res.status(400).json(err) })
      } catch (err) {
        return res.status(500).json(err)
      }
})

module.exports = router;