module.exports = {
  updateUser: () => {
    try {
      return {
        reponse: "user Was updated",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteUser: () => {
    try {
      return {
        reponse: "user Deleted",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
 
};
