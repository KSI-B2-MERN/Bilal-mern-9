
const sequelize = require('../../bin/dbconnection');
const { Model, DataTypes } = require('sequelize');

class Roles extends Model {}

Roles.init(
  {
    roleId: {
      primaryKey: true,
      type: DataTypes.STRING(90),
      
    },
    role: {
      type: DataTypes.STRING(90),
      allowNull: false,
    
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid : true,
    modelName: 'Role',
  }
);
module.exports = Roles
