const roleService = require('../services/roleService');

module.exports = {

    createRole  :  async(req,res)=> {
        try {

            const createRole =  await roleService.createRole(req.body)
            if (createRole.error) {

                return res.send({response : createRole.error})
                
            }
            return res.send( {
                response : createRole.response

            })
           
            
        } catch (error) {
            return {
                reposnse : error.message
            }
            
        }
    }
}