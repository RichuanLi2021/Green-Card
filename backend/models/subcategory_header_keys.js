'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class subcategory_header_keys extends Model {
    static associate(models) {
      this.belongsTo(models.Subcategory_Header, { foreignKey: 'headerID', as: 'header' })
    }

    toJSON() {
      return { ...this.get(), id: undefined, headerID: undefined }
    }
  }

  subcategory_header_keys.init({
    uuid: {
      defaultValue: uuidv4(),
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
        notEmpty: { msg: 'Subcategory Header Key uuid cannot be empty' }
      }
    },
    headerID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Subcategory Header Key must have a headerID' },
        notEmpty: { msg: 'Subcategory Header Key headerID cannot be empty' }
      },
      set(value) {
        this.setDataValue('headerID', value)
      }
    },
    key: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Subcategory Header Key must have a key' },
        notEmpty: { msg: 'Subcategory Header Key key cannot be empty' }
      },
      set(value) {
        this.setDataValue('key', value)
      }
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Subcategory Header Key must have a value' },
        notEmpty: { msg: 'Subcategory Header Key value cannot be empty' }
      },
      set(value) {
        this.setDataValue('value', value)
      }
    }
  }, {
    sequelize,
    modelName: 'Subcategory_Header_Key',
    tableName: 'subcategory_header_keys',
    timestamps: true
  });

  return subcategory_header_keys;
};