const { Category, Subcategory, Subcategory_Type, Subcategory_Header, Subcategory_Data } = require('../models')
const { v4: uuidv4 } = require("uuid")

//Get all categories
exports.getAllCategories = async(req, res) => {
    try {
        await Category.findAll()
          .then((message) => { return res.status(200).json(message) })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding categories' })
      }
}


//Get one
exports.getOneCategory = async(req, res) => {
    try {
        await Category.findOne({
          where: { uuid: req.params.id },
          include: {
            model: Subcategory,
            attributes: {
              exclude: ['SubcategoryTypeId', 'CategoryId']
            },
            include:[
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
          }
        })
          .then((message) => {
            if (!message) return res.status(400).json({ errorMessage: 'Encountered error while finding category' })
            return res.status(200).json(message)
          })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while finding category' })
      }
}


//Create one
exports.createOneCategory = async(req, res) => {
    const { title } = req.body
  // Sanitize and validate
  try {
    await Category.create({
      uuid: uuidv4(),
      title: title
    })
      .then((category) => { return res.status(201).json({ message: 'Successfully created category', category }) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while creating category' })
  }
}


//Update one
exports.updateOneCategory = async(req, res) => {
    const { title, description } = req.body
  // Sanitize and validate

  try {
    await Category.update({
      title: title,
      description: description,
    }, {
      where: { uuid: req.params.id }
    })
      .then((result) => {
        if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while updating category' })
        return res.status(200).json({ message: 'Successfully updated category' })
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while updating category' })
  }
}


//Delete one
exports.deleteOneCategory = async(req, res) => {
    try {
        await Category.destroy({
          where: { uuid: req.params.id }
        })
          .then((result) => {
            if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while deleting category' })
            return res.status(200).json({ message: 'Successfully deleted category' })
          })
          .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) })
      } catch (error) {
        return res.status(500).json({ error, errorMessage: 'Encountered unexpected error while deleting category' })
      }
}