'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate(models) {
      this.hasMany(models.Subcategory)
    }
  }

  categories.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Category must have a title' },
        notEmpty: { msg: 'Category title cannot be empty' }
      },
      set(value) {
        this.setDataValue('title', value)
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    timestamps: true
  });

  return categories;
};