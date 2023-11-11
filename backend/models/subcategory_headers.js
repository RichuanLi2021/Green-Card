'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class subcategory_headers extends Model {
    static associate(models) {}

    toJSON() {
      return { ...this.get(), id: undefined, subcategoryID: undefined }
    }
  }

  subcategory_headers.init({
    uuid: {
      defaultValue: uuidv4(),
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'Subcategory Header uuid cannot be empty' }
      }
    },
    subcategoryID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Subcategory Header must have a subcategoryID' },
        notEmpty: { msg: 'Subcategory Header subcategoryID cannot be empty' }
      },
      set(value) {
        this.setDataValue('subcategoryID', value)
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Subcategory Header must have a title' },
        notEmpty: { msg: 'Subcategory Header title cannot be empty' }
      },
      set(value) {
        this.setDataValue('title', value)
      }
    }
  }, {
    sequelize,
    modelName: 'Subcategory_Header',
    tableName: 'subcategory_headers',
    timestamps: true
  });

  return subcategory_headers;
};