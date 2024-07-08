const { Subcategory, Subcategory_Header, Subcategory_Data } = require('../models')
const { v4: uuidv4 } = require("uuid")


// Get All
exports.getAllSubHeader = async(req, res) => {
    try {
        await Subcategory_Header.findAll({
          attributes: {
            exclude: ['SubcategoryId']
          }
        })
          .then((message) => { return res.status(200).json(message) })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding subcategory headers' })
      }
}


// Get one
exports.getOneSubHeader = async(req, res) => {
    try {
        await Subcategory_Header.findOne({
          where: { uuid: req.params.id },
          attributes: {
            exclude: ['SubcategoryId']
          },
          include: {
            model: Subcategory_Data,
            attributes: {
              exclude: ['SubcategoryHeaderId']
            }
          }
        })
          .then((message) => {
            if (!message) return res.status(400).json({ errorMessage: 'Encountered error while finding subcategory header' })
            return res.status(200).json(message)
          })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding subcategory header' })
      }
}


//Create one
exports.createOneSubHeader = async(req, res) => {
    const { subcategoryUUID, title } = req.body
  // Sanitize and validate

  try {
    const subcategory = await Subcategory.findOne({
      where: { uuid: subcategoryUUID }
    }).catch(() => { return res.status(400).json({ errorMessage: 'Subcategory does not exist' }) })

    await Subcategory_Header.create({
      uuid: uuidv4(),
      subcategoryID: subcategory.id,
      title: title
    })
      .then((subcategory_header) => { return res.status(201).json({ message: 'Successfully created subcategory header', subcategory_header }) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while creating subcategory header' })
  }
}


//Update one
exports.updateSubHeader = async(req, res) => {
    const { subcategoryUUID, title } = req.body
  // Sanitize and validate

  try {
    const subcategory = await Subcategory.findOne({
      where: { uuid: subcategoryUUID }
    }).catch(() => { return res.status(400).json({ errorMessage: 'Subcategory does not exist' }) })

    await Subcategory_Header.update({
      subcategoryID: subcategory.id,
      title: title
    }, {
      where: { uuid: req.params.id }
    })
      .then((result) => {
        if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while updating subcategory header' })
        return res.status(200).json({ message: 'Successfully updated subcategory header' })
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while updating subcategory header' })
  }
}


//Delete one
exports.deleteOneSubHeader = async(req, res) => {
    try {
        await Subcategory_Header.destroy({
          where: { uuid: req.params.id }
        })
          .then((result) => {
            if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while deleting subcategory header' })
            return res.status(200).json({ message: 'Successfully deleted subcategory header' })
          })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while deleting subcategory header' })
      }
}