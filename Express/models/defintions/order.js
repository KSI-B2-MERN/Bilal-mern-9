const database = require('../../bin/dbconnection');
const sequelize = require('../../bin/dbconnection');

const {Model,DataTypes} = require('sequelize')


class Orders extends Model{}

Orders.init({

    orderID : {
        type : DataTypes.STRING(),
        primaryKey : true
    },
    orderDate : {
        type : DataTypes.DATE(),
        defaultValue : DataTypes.NOW,
        allowNull : false
    }

},{
    sequelize,
    timestamps : true,
    paranoid : true,
    modelName : "Orders"

})
module.exports = Orders;