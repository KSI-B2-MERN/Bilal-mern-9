const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../bin/dbconnection');

class Roles extends Model {}

Roles.init(
  {
    roleId: {
      primaryKey: true,
      type: DataTypes.STRING(90),
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(90),
      allowNull: false,
    
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Roles',
  }
);
module.exports = Roles