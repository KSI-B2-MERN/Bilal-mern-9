const sequelize = require ('../../bin/dbconnection');

const {Model , DataTypes} = require('sequelize')


class Cart extends Model {}

Cart.init ({

    cartId : {
        primaryKey : true,
        type : DataTypes.STRING(90)
    },


  

},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "cart"



})

module.exports = Cart