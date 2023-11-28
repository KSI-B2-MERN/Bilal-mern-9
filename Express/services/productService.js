const productModel = require('../models/productModel')

module.exports = {

    createProduct : (body)=> {

      
        
        try {
            const productModelResponse = productModel.createProduct(body);
           
            if(productModelResponse.response) {
                return {
                    response : productModelResponse.response
                }

            }
            else {
                return {
                    response : productModelResponse.error
                }
            }
            
            
        } catch (error) {
           return {
            error :   error.message
           }
        }
    },
    updateProduct : (body)=> {

      
        
        try {
            const productModelResponse = productModel.updateProduct(body);
           
            if(productModelResponse.response) {
                return {
                    response : productModelResponse.response
                }

            }
            else {
                return {
                    response : productModelResponse.error
                }
            }
            
            
        } catch (error) {
           return {
            error :   error.message
           }
        }
    }
}