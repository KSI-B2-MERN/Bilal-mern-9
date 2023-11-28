const productController = require('../controller/productController');

const router = require('express').Router();



router.post('/createproduct',productController.createProduct)

router.put('/updateproduct/:id',productController.updateProduct)  //not yet configered id for product and and with db


module.exports = router;