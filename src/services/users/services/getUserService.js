const UserRepository = require("../repositories/userRepository");

const getUsersService = async () => {
  const userRepository = new UserRepository();
  const result = await userRepository.getUsers();
  return result;
};


module.exports = { getUsersService };
