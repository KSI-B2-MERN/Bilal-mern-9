const { models } = require('./index');

module.exports = {
    createRole: async (roleId, role) => {
        try {
            const createdRole = await models.Roles.create({
                roleId,
                role
            });
            return {
                response: createdRole
            };
        } catch (error) {
            return {
                error: error.message
            };
        }
    }
};
