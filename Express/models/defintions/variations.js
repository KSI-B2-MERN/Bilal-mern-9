const sequelize = require ('../../bin/dbconnection')

const {Model,DataTypes} = require('sequelize')

class Variations extends Model {}

Variations.init({
    VariationsId : {
        primaryKey :true,
        type : DataTypes.INTEGER,
        
        primaryKey : true

    },
    VariationsSize : {
        type : DataTypes.STRING,
         allowNull : false
    },
    VariationsQuantity : {
        type : DataTypes.STRING(90),
         allowNull : false
    },
    VariationsWeight : {
        type : DataTypes.STRING(90),
         allowNull : false
    },

    

},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "Variations"
});

module.exports = Variations
