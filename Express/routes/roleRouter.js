const roleController = require('../controller/roleController')

const router = require('express').Router()




router.post('/createrole',roleController.createRole)

module.exports = router;