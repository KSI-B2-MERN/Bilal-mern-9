const {Sequelize} = require('sequelize');
const config = require('../config.json');


const database = new Sequelize(config.db);
database.authenticate().then(()=> {
    console.log("Database Connected")
}).catch((e)=> {
    console.log(e.message)
})

 module.exports= database