const roleService = require('../services/roleService');
const joi = require("joi");

const roleSchema = joi.object().keys({
    role: joi.string().required(),
    
})

module.exports = {
    createRole: async (req, res) => {

        try {
            const validate = await roleSchema.validateAsync(req.body);
            const createRole = await roleService.createRole(validate);
            if (createRole.error) {
                res.send({
                    error: createRole.error
                })
            }
            else {
                res.send({
                    response: createRole.response
                })
            }
        }
        catch (err) {
            res.send({
                error: err.message
            })
        }
    }
}