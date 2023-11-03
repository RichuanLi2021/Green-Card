'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subcategory_data extends Model {
    static associate(models) {
      this.belongsTo(models.Subcategory_Header, { foreignKey: 'headerID', as: 'subcategory_header' })
    }
  }

  subcategory_data.init({
    headerID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: 'Subcategory Data must have a headerID' },
        notEmpty: { msg: 'Subcategory Data headerID cannot be empty' }
      }
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Subcategory Data must have a value' },
        notEmpty: { msg: 'Subcategory Data value cannot be empty' }
      }
    },
    info: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Subcategory Data info cannot be empty' }
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