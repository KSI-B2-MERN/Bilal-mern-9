const sequelize = require('../../bin/dbconnection');
const {Model,DataTypes} = require('sequelize');

class Buyer extends Model {}

Buyer.init({
 
    buyerId : {
        primaryKey : true,
        type : DataTypes.STRING(20),
        
    },
    buyerAddress : {
        type  : DataTypes.STRING(90),
        allowNull : false ,

    },
    buyerContactNo: {
        type  : DataTypes.STRING(90),
        allowNull : false ,

    },
    






},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "Buyers"
})
module.exports = Buyer
console.log(Buyer)
    