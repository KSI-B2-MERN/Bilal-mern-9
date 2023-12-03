const sequelize = require('../bin/dbconnection');
const Product = require('../models/defintions/product')
const Users = require('../models/defintions/user');
const Cart = require('./defintions/cart');
const CartItems = require('./defintions/cartItems');
const Orders = require('./defintions/order');
const OrderItems = require('./defintions/orderitems');
const Roles = require('./defintions/roles');
const Variations = require('./defintions/variations');

const models = [Users,Product,Orders,Variations,Roles,Cart,CartItems,OrderItems];

const db = {};


//1:1
Users.hasOne(Cart,{foreignKey :"userId"})
Cart.belongsTo(Users,{foreignKey : "userId"})


//1:N

Users.hasMany(Roles,{foreignKey : "userId"})
Roles.belongsTo(Users , {foreignKey : "userId"})


Users.hasMany(Product,{foreignKey : "userId"})
Product.belongsTo(Users,{foreignKey : "userId"})
Users.hasMany(Orders,{foreignKey : "userId"})
Orders.belongsTo(Users,{foreignKey : "userId"})
Product.hasMany(Variations,{foreignKey : "productId"})
Variations.belongsTo(Product,{foreignKey : "productId"})
Cart.hasMany(CartItems,{foreignKey : "cartId"})
CartItems.belongsTo(Cart ,{foreignKey : "cartId"})
Orders.hasMany(OrderItems,{foreignKey : "orderId"});
OrderItems.belongsTo(Orders, {foreignKey : "orderId"})

Variations.hasMany(CartItems,{foreignKey : 'VariationsId'})
CartItems.belongsTo(Variations,{foreignKey : "VariationsId"})


db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db,models}

