const { Category, Subcategory, Subcategory_Type, Subcategory_Header, Subcategory_Data } = require('../models')


// Get All Categories (with subcategories, type, headers, and data)
exports.getAllCategory = async (req, res) => {
    try {
        await Category.findAll({
          attributes: {
            exclude: ['createdAt']
          },
          include: [
            {
              model: Subcategory,
              attributes: {
                exclude: ['createdAt', 'SubcategoryTypeId', 'CategoryId']
              },
              include: [
                {
                  model: Subcategory_Type,
                  attributes: {
                    exclude: ['createdAt',  'SubcategoryId']
                  }
                },
                {
                  model: Subcategory_Header,
                  attributes: {
                    exclude: ['createdAt',  'SubcategoryId']
                  },
                  include: {
                    model: Subcategory_Data,
                    attributes: {
                      exclude: ['createdAt',  'SubcategoryHeaderId']
                    }
                  }
                }
              ]
            }
          ]
        })
          .then((message) => { return res.status(200).json({message}) })
          .catch((err) => { return res.status(400).json(err) })
      } catch (err) {
        return res.status(500).json(err)
      }
}


// Get All Subcategories (with type, headers, and data)
exports.getAllSubcatrgories = async (req, res) => {
    try {
        await Subcategory.findAll({
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'SubcategoryTypeId', 'CategoryId']
          },
          include: [
            {
              model: Subcategory_Type,
              attributes: {
                exclude: ['createdAt', 'updatedAt', 'SubcategoryId']
              }
            },
            {
              model: Subcategory_Header,
              attributes: {
                exclude: ['createdAt', 'updatedAt', 'SubcategoryId']
              },
              include: {
                model: Subcategory_Data,
                attributes: {
                  exclude: ['createdAt', 'updatedAt', 'SubcategoryHeaderId']
                }
              }
            }
          ]
        })
          .then((message) => { return res.status(200).json({message}) })
          .catch((err) => { return res.status(400).json(err) })
      } catch (err) {
        return res.status(500).json(err)
      }
}


// Get All Subcategory Headers (with data)
exports.getAllSubHeaders = async (req, res) => {
    try {
        await Subcategory_Header.findAll({
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'SubcategoryId']
          },
          include: {
            model: Subcategory_Data,
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'SubcategoryHeaderId']
            }
          }
        })
          .then((message) => { return res.status(200).json({message}) })
          .catch((err) => { return res.status(400).json(err) })
      } catch (err) {
        return res.status(500).json(err)
      }
}


