const sequelize = require ('../../bin/dbconnection')

const {Model,DataTypes} = require('sequelize')

class Product extends Model {}

Product.init({
    ProductId : {
        primaryKey :true,
        type : DataTypes.STRING(34),
        
      

    },
    productName : {
        type : DataTypes.STRING(90),
         allowNull : false
    },
 
    productDescription : {
        type : DataTypes.STRING(90),
         allowNull : false
    },

  
},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "Product"
});

module.exports = Product
