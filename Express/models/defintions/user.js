const sequelize = require("../../bin/dbconnection");
const { Model, DataTypes } = require("sequelize");

class Users extends Model {} 

Users.init(
    {
        userId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
        firstName: {
            type: DataTypes.STRING(34),
           
        },
        lastName: {
            type: DataTypes.STRING(34),
            
        },
        email: {
            type: DataTypes.STRING(34),
            
            unique: true,
        },
        password: {
            type: DataTypes.STRING(34),
           
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Users",
})

module.exports = Users;