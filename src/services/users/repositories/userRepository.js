const { v4 } = require("uuid");
const dynamoDBClient  = require("../../../config/db");
const User = require("../models/user");
const IUserRepository = require("./IUserRepository");

class UserRepository extends IUserRepository {
    constructor() {
        super()
        this.dynamoDBInstance = dynamoDBClient.getInstance();
      }
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

      await this.dynamoDBInstance
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
        const result = await this.dynamoDBInstance
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

