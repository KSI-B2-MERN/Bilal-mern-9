
const sequelize = require('../../bin/dbconnection');

const {Model,DataTypes} = require('sequelize')


class OrderItems extends Model{}

OrderItems.init({

    OrderItemsId : {
        primaryKey : true,
        type : DataTypes.STRING(),
        
    },
   
    OrderItemsQuantity : {
        type : DataTypes.STRING,
        allowNull : false
    },
    // shippingStatus : {
    //     type : DataTypes.STRING(90),
    //     allowNull : false, 
    //     defaultValue  : "pending"
    // },
    // paymentStatus : {
    //     type : DataTypes.STRING(90),
    //     allowNull : false,
    //     defaultValue  : "pending"
    // },


},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "OrdersItems"

})
module.exports = OrderItems;