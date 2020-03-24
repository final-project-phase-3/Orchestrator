const { getUser } = require("../querys/food");
const { register } = require("../querys/user");

const resolvers = {
  Query: {
    async getUser(_, input, { token }, info) {
      const response = await getUser(token);
      console.log(response);
      return response;
    }
  },
  Mutation: {
    async register(_, args, context) {
      const data = {
        username: args.username,
        email: args.email,
        password: args.password
      };
      const response = await register(data);
      return response;
    }
  }
};

module.exports = resolvers;
