'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      this.hasMany(models.User_Role)
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }

  users.init({
    fName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have a fName' },
        notEmpty: { msg: 'User fName cannot be empty' }
      }
    },
    lName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have a lName' },
        notEmpty: { msg: 'User lName cannot be empty' }
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have an email' },
        notEmpty: { msg: 'User email cannot be empty' },
        isEmail: { msg: 'User email must be a valid email address' }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have a password' },
        notEmpty: { msg: 'User password cannot be empty' }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'User phone cannot be empty' }
      }
    },
    lastLogin: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: { msg: 'User lastLogin cannot be empty' }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
  });

  return users;
};