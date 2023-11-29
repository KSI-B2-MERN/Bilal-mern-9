const sequelize = require ('../../bin/dbconnection')

const {Model,DataTypes} = require('sequelize')

class Product extends Model {}

Product.init({
    ProductId : {
        primaryKey :true,
        type : DataTypes.STRING(34),
        
        primaryKey : true

    },
    productName : {
        type : DataTypes.STRING(90),
         allowNull : false
    },
    productPrice : {
        type : DataTypes.STRING(90),
         allowNull : false
    },
    productDescription : {
        type : DataTypes.STRING(90),
         allowNull : false
    },

    stockQuantity : {
        type : DataTypes.STRING(2000)
    }

},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "Product"
});

module.exports = Product
