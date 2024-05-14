const { v4 } = require("uuid");
const { dynamoClient } = require("../../../config/db");
const User = require("../models/user");
const IUserRepository = require("./IUserRepository");

class UserRepository extends IUserRepository {
  async createUser(userData) {
    try {
      const {
        nombre,
        altura,
        ojo_color,
        pelo_color,
        peso,
        piel_color,
        nacimiento_anio,
        genero,
        vehiculos,
      } = userData;
      const id = v4();
      const newUser = new User({
        id,
        nombre,
        altura,
        ojo_color,
        pelo_color,
        peso,
        piel_color,
        nacimiento_anio,
        genero,
        vehiculos,
      });

      await dynamoClient
        .put({
          TableName: "usersTable",
          Item: newUser,
        })
        .promise();
      return {
        success: true,
        message: "Usuario creado correctamente",
      };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async getUsers(){
    try {
        const result = await dynamoClient
          .scan({
            TableName: "usersTable"
          })
          .promise();
        return {
          success: true,
          result,
        };
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
  }
}

module.exports = UserRepository

