const { response } = require("../app");
const userModel = require("../models/userModel");

module.exports = {
  updateUser: () => {
    try {
      const updateUserResponse = userModel.updateUser();
      if (updateUserResponse.reponse) {
        return {
          response: updateUserResponse.reponse,
        };
      }
      return {
        error: updateUserResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deleteUser : ()=> {

    try {

      const deleteUserResponse = userModel.deleteUser()
      if (deleteUserResponse.reponse){
        return {

          response : deleteUserResponse.reponse
        }
        

      }
      return {

        response : deleteUserResponse.error
          
      }


    }
    catch (e){
      return {
        error : e,
      }

    }
  }

}