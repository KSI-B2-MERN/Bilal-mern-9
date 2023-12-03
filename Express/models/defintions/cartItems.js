const sequelize = require ('../../bin/dbconnection');

const {Model , DataTypes} = require('sequelize')


class CartItems extends Model {}

CartItems.init ({

    cartItemId : {
        primaryKey : true,
        type : DataTypes.STRING(90)
    },
  
    


  

},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "cartItems"



})

module.exports = CartItems