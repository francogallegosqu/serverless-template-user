class IUserRepository {
    async createUser(user) {
      throw new Error('Método no implementado');
    }
    async getUsers() {
        throw new Error('Método no implementado');
      }
  }

module.exports = IUserRepository
  