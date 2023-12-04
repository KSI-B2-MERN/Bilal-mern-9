const userService = require('../services/userService');


module.exports = {
    createUser :  async(req,res)=> {

        try {

            const createUser = await userService.createUser(req.body)


            if(createUser.error) {
            
                res.send({response : createUser.error} )
                    
                
            }
                res.send({response : createUser.response})

            
            
        } catch (error) {
            return {
                error : error.message
            }
            
        }

    }
    }
