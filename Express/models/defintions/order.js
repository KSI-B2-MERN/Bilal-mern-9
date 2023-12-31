
const sequelize = require('../../bin/dbconnection');

const {Model,DataTypes} = require('sequelize')


class Orders extends Model{}

Orders.init({

    orderID : {
        primaryKey : true,
        type : DataTypes.STRING(),
        
    },
   
    orderItemPrice : {
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
    modelName : "Orders"

})
module.exports = Orders;