const roleModel = require('../models/roleModel');

const {v4} = require('uuid');



module.exports = {

    createRole :  async (body)=>{   

        try {
const roleId = v4()
const roleModelResponse = await roleModel.createRole(body.role,roleId)
if (roleModelResponse.error) {
    return {
        response : roleModelResponse.error
    }
}
return {
    response : roleModelResponse.response
}
            
            
        } catch (error) {
            return {
                response : error.messsage
            }
            
        }
    }
}