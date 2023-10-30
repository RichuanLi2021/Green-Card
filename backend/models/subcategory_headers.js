'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subcategory_headers extends Model {
    static associate(models) {
      this.belongsTo(models.Subcategory, { foreignKey: 'subcategoryID', as: 'subcategory' })
      this.hasMany(models.Subcategory_Data)
    }

    toJSON() {
      return { ...this.get(), id: undefined, subcategoryID: undefined }
    }
  }
  subcategory_headers.init({
    subcategoryID: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Subcategory Header must have a title' },
        notEmpty: { msg: 'Subcategory Header title cannot be empty' }
      }
    },
    abbreviation: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Subcategory Header abbreviation cannot be empty' }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Subcategory Header description cannot be empty' }
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