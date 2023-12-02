'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subcategory_data extends Model {
    static associate(models) {}

    toJSON() {
      return { ...this.get(), id: undefined, headerID: undefined }
    }
  }

  subcategory_data.init({
    uuid: {
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
        notNull: { msg: 'Data must have a header' },
        notEmpty: { msg: 'Data header cannot be empty' }
      }
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Data must have a value' },
        notEmpty: { msg: 'Data value cannot be empty' }
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