
const sequelize = require('../../bin/dbconnection');

const {Model,DataTypes} = require('sequelize')


class Orders extends Model{}

Orders.init({

    orderID : {
        primaryKey : true,
        type : DataTypes.STRING(),
        primaryKey : true
    },
    orderDate : {
        type : DataTypes.DATE(),
        defaultValue : DataTypes.NOW,
        allowNull : false
    },
    totalAmount : {
        type : DataTypes.STRING(90),
        allowNull : false
    },
    shippingStatus : {
        type : DataTypes.STRING(90),
        allowNull : false, 
        defaultValue  : "pending"
    },
    paymentStatus : {
        type : DataTypes.STRING(90),
        allowNull : false,
        defaultValue  : "pending"
    },


},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "Orders"

})
module.exports = Orders;