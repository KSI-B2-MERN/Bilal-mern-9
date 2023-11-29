const sequelize = require('../bin/dbconnection');
const Product = require('../models/defintions/product')
const Users = require('../models/defintions/user');
const Buyer = require('./defintions/buyer');
const Cart = require('./defintions/cart');
const Orders = require('./defintions/order');
const Roles = require('./defintions/roles');
const Variations = require('./defintions/variations');

const models = [Users,Product,Orders,Buyer,Variations,Roles,Cart];
const db = {};


db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db,models}