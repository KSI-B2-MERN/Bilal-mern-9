const sequelize = require('../bin/dbconnection');
const Product = require('../models/defintions/product')
const Users = require('../models/defintions/user');
const Orders = require('./defintions/order');

const models = [Users,Product,Orders];
const db = {};


db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db,models}