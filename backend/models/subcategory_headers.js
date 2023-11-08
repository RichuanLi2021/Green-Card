'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subcategory_headers extends Model {
    static associate(models) {
      this.belongsTo(models.Subcategory, { foreignKey: 'subcategoryID', as: 'subcategory' })
      this.hasMany(models.Subcategory_Data)
    }
  }

  subcategory_headers.init({
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