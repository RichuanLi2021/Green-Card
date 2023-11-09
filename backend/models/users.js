'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require("uuid");

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
    uuid: {
      defaultValue: uuidv4(),
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'User uuid cannot be empty' }
      }
    },
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
    verified: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: { msg: 'User verified cannot be empty' }
      },
      set(value) {
        this.setDataValue('verified', value)
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