const userController = require('../controller/userController')
const router = require('express').Router()



router.post('/createuser' ,userController.createUser)

module.exports = router