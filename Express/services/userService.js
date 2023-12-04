const userModel = require('../models/userModel')
const { v4: uuidv4 } = require('uuid');


module.exports = {
    createUser :  async(body)=> {
       try {
        const userId = uuidv4()
        const createUserResponse = await userModel.createUser(userId,body)

        if(createUserResponse.error) {
            return {
                response : createUserResponse.error
            }
        }
        return {
            response : createUserResponse.response
        }
       } catch (error) {
        return {
            response : error.message
        }
        
       }
    }
}