const express = require('express');
const router = express.Router();
const { User, User_Role, Role } = require('../models');
const { validateUserToken, validateAdminToken } = require('../middleware/validateToken');
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

// Get All (Admin Only)
router.get('/', validateAdminToken, async (req, res) => {
  try {
    await User.findAll({
      include: {
        model: User_Role,
        attributes: {
          exclude: ['UserId', 'RoleId']
        },
        include: {
          model: Role
        }
      }
    })
      .then((message) => { return res.status(200).json(message) })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Get One (User and Admin)
router.get('/:id', validateUserToken, async (req, res) => {
  try {
    await User.findOne({
      include: {
        model: User_Role,
        attributes: {
          exclude: ['UserId', 'RoleId']
        },
        include: {
          model: Role
        }
      },
      where: { uuid: req.params.id }
    })
      .then((message) => {
        if (!message) return res.status(400).json({ errorMessage: 'Encountered error while trying to find account' });
        return res.status(200).json(message);
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Create One (Admin Only)
router.post('/', validateAdminToken, async (req, res) => {
  const { discipline, firstName, lastName, email, password } = req.body;
  // Sanitize and validate

  try {
    bcrypt.hash(password, 12).then((hash) => {
      User.create({
        uuid: uuidv4(),
        discipline: discipline,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash
      })
        .then((user) => {
          User_Role.create({
            uuid: uuidv4(),
            userID: user.id,
            roleID: 2 // 'user' Role
          })
            .then(() => { res.status(201).json({ message: 'Successfully created account', user }) })
            .catch((error) => { res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
        })
        .catch((error) => { res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
    });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Update One (Admin Only)
router.put('/:id', validateAdminToken, async (req, res) => {
  const { discipline, email, password } = req.body;
  // Sanitize and validate

  try {
    bcrypt.hash(password, 12).then((hash) => {
      User.update({
        discipline: discipline,
        email: email,
        password: hash
      }, {
        where: { uuid: req.params.id }
      })
        .then((result) => {
          if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while updating account' });
          return res.status(200).json({ message: 'Successfully updated account' });
        })
        .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
    });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Delete One (Admin)
router.delete('/admin/:id', validateAdminToken, async (req, res) => {
  try {
    await User.destroy({
      where: { uuid: req.params.id }
    })
      .then((result) => {
        if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while trying to disable account' });
        return res.status(200).json({ message: 'Successfully disabled account' });
      })
      .catch((error) => { return res.status(400).json({ error, errorMessage: error['errors'][0].message }) });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

// Delete One (User)
router.delete('/user/:id', validateUserToken, async (req, res) => {
  if (req.user.uuid !== req.params.id) {
    return res.status(403).json({ error: 'User is not authorized to delete this account' });
  }
  try {
    const result = await User.destroy({ where: { uuid: req.params.id } });
    if (result !== 1) return res.status(400).json({ errorMessage: 'Encountered error while trying to disable account' });
    return res.status(200).json({ message: 'Successfully disabled account' });
  } catch (error) {
    return res.status(500).json({ error, errorMessage: 'Encountered unexpected error' });
  }
});

module.exports = router;