
const {models} = require('./index');

module.exports = {


    createUser  :  async(userId,body) => {

    
       
      try {
        const registerUser = await models.Users.create({
            userId,
            ...body,
        });
        return {
            response : registerUser
        }
        
      } catch (error) {
        return {
            error : error.message
        }
        
      }
    }
}