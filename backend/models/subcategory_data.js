'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class subcategory_data extends Model {
    static associate(models) {}

    toJSON() {
      return { ...this.get(), id: undefined, headerID: undefined }
    }
  }

  subcategory_data.init({
    uuid: {
      defaultValue: uuidv4(),
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'Subcategory Data uuid cannot be empty' }
      }
    },
    headerID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Subcategory Data must have a headerID' },
        notEmpty: { msg: 'Subcategory Data headerID cannot be empty' }
      },
      set(value) {
        this.setDataValue('headerID', value)
      }
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Subcategory Data must have a value' },
        notEmpty: { msg: 'Subcategory Data value cannot be empty' }
      },
      set(value) {
        this.setDataValue('value', value)
      }
    }
  }, {
    sequelize,
    modelName: 'Subcategory_Data',
    tableName: 'subcategory_data',
    timestamps: true
  });

  return subcategory_data;
};