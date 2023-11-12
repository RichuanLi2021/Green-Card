const express = require('express');
const router = express.Router();
const { User, User_Role, Role } = require('../models')
const { validateAdminToken } = require('../middleware/validate')
const bcrypt = require("bcrypt");

// Get All
router.get('/', validateAdminToken, async (req, res) => {
  try {
    await User.findAll({
      include: {
        model: User_Role,
        include: {
          model: Role
        }
      }
    })
      .then((users) => { return res.status(200).json({ message: users }) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Get One
router.get('/:id', validateAdminToken, async (req, res) => {
  try {
    await User.findOne({
      where: { uuid: req.params.id },
      include: {
        model: User_Role,
        include: {
          model: Role
        }
      }
    })
      .then((user) => { return res.status(200).json({ message: user }) })
      .catch((err) => { return res.status(400).json(err) })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Create One
router.post('/', validateAdminToken, async (req, res) => {
  const { fName, lName, email, password } = req.body
  // Sanitize and validate

  try {
    bcrypt.hash(password, 12).then((hash) => {
      User.create({
        fName: fName,
        lName: lName,
        email: email,
        password: hash
      })
        .then((user) => {
          User_Role.create({
            userID: user.id,
            roleID: 2 // 'user' Role
          })
            .then(() => {
              res.status(201).json({ message: user })
            })
            .catch((err) => {
              res.status(400).json({ error: err })
            })
        })
        .catch((err) => {
          res.status(400).json({ error: err })
        })
    })
  } catch (err) {
    return res.status(500).json(err)
  }
})

// Update One
router.put('/:id', validateAdminToken, async (req, res) => {
  const { fName, lName, email, password } = req.body
  // Sanitize and validate

  try {
    bcrypt.hash(password, 12).then((hash) => {
      User.update({
        fName: fName,
        lName: lName,
        email: email,
        password: hash
      }, { where: { uuid: req.params.id } })
        .then((user) => {
          res.status(201).json({ message: 'Successfully updated account', user })
        })
        .catch((error) => {
          res.status(400).json(error)
        })
    })
  } catch (error) {
    return res.status(500).json(error)
  }
})

// Delete One
router.delete('/:id', validateAdminToken, async (req, res) => {
  try {
    await User.destroy({ where: { uuid: req.params.id } })
      .then((message) => { return res.status(200).json({message}) })
      .catch((error) => { return res.status(400).json(error) })
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router;