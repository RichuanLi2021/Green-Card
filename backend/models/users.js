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
      },
      set(value) {
        this.setDataValue('fName', value)
      }
    },
    lName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have a lName' },
        notEmpty: { msg: 'User lName cannot be empty' }
      },
      set(value) {
        this.setDataValue('lName', value)
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have an email' },
        notEmpty: { msg: 'User email cannot be empty' },
        isEmail: { msg: 'User email must be a valid email address' }
      },
      set(value) {
        this.setDataValue('email', value)
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'User must have a password' },
        notEmpty: { msg: 'User password cannot be empty' }
      },
      set(value) {
        this.setDataValue('password', value)
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'User phone cannot be empty' }
      },
      set(value) {
        this.setDataValue('phone', value)
      }
    },
    lastLogin: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: { msg: 'User lastLogin cannot be empty' },
        isDate: { msg: 'User lastLogin must be a date'}
      },
      set(value) {
        this.setDataValue('lastLogin', value)
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
    tableName: 'users',
    timestamps: true
  });

  return users;
};