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
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Role description cannot be empty' }
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