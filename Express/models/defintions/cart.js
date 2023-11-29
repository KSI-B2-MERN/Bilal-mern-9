const sequelize = require ('../../bin/dbconnection');

const {Model , DataTypes} = require('sequelize')


class Cart extends Model {}

Cart.init ({

    cartId : {
        primaryKey : true,
        type : DataTypes.INTEGER
    },


   quantity : {
      type : DataTypes.INTEGER,
      allowNull : false
   }

},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "cart"



})

module.exports = Cart