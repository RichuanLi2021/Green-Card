'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subcategory_headers extends Model {
    static associate(models) {}

    toJSON() {
      return { ...this.get(), id: undefined, subcategoryID: undefined }
    }
  }

  subcategory_headers.init({
    uuid: {
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
        notNull: { msg: 'Header must have a subcategory' },
        notEmpty: { msg: 'Header subcategory cannot be empty' }
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Header must have a title' },
        notEmpty: { msg: 'Header title cannot be empty' }
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