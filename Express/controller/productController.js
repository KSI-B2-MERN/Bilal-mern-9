const productService = require('../services/productService');
const joi = require('joi');
const bcrypt = require('bcrypt')

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    description: joi.string()
});

module.exports = {
    createProduct: async (req, res) => {
        try {
            const validProduct = await productSchema.validateAsync(req.body);
            const productServiceResponse = productService.createProduct(validProduct);

            if (productServiceResponse.response) {
                res.send({ response: validProduct });
            } else {
                res.status(400).send({
                    error: productServiceResponse.error || 'Product creation failed.'
                });
            }
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const validProduct = await productSchema.validateAsync(req.body);
            const productServiceResponse = productService.updateProduct(validProduct);

            if (productServiceResponse.response) {
                res.status(200).send({ response: productServiceResponse.response });
            } else {
                res.status(400).send({
                    error: productServiceResponse.error || 'Product updation failed failed.'
                });
            }
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
};
