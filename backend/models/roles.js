'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      this.hasMany(models.User_Role)
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }

  roles.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Role must have a title' },
        notEmpty: { msg: 'Role title cannot be empty' }
      },
      set(value) {
        this.setDataValue('title', value)
      }
    }
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
    timestamps: true
  });

  return roles;
};