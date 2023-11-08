'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subcategory_types extends Model {
    static associate(models) {
      this.hasMany(models.Subcategory)
    }
  }

  subcategory_types.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Subcategory Type must have a title' },
        notEmpty: { msg: 'Subcategory Type title cannot be empty' }
      },
      set(value) {
        this.setDataValue('title', value)
      }
    }
  }, {
    sequelize,
    modelName: 'Subcategory_Type',
    tableName: 'subcategory_types',
    timestamps: true
  });

  return subcategory_types;
};