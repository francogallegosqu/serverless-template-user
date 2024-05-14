const UserRepository = require("../repositories/userRepository");

const createUserService = async (userData) => {
  const userRepository = new UserRepository();
  const result = await userRepository.createUser(userData);
  return result;
};


module.exports = { createUserService };
