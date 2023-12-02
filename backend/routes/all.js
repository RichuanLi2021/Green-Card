const express = require('express');
const router = express.Router();
const { Category, Subcategory, Subcategory_Type, Subcategory_Header, Subcategory_Data } = require('../models')
const { validateUserToken } = require('../middleware/validateToken')

// Get All Categories (with subcategories, type, headers, and data)
router.get('/categories', async (req, res) => {
  try {
    await Category.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      include: [
        {
          model: Subcategory,
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
        }
      ]
    })
      .then((message) => { return res.status(200).json({message}) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Get All Subcategories (with type, headers, and data)
router.get('/subcategories', validateUserToken, async (req, res) => {
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
})

// Get All Subcategory Headers (with data)
router.get('/subcategory_headers', validateUserToken, async (req, res) => {
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
})

module.exports = router;
