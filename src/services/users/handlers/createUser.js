const { createUserService } = require("../services/createUserService");
const { createUserSchema } = require("../validators/createUserValidator");

module.exports.handler = async (event) => {
  try {
    const userData = JSON.parse(event.body);
    const { error } = createUserSchema.validate(userData);
    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: error.details[0].message }),
      };
    }
    const {success, message} = await createUserService(userData);
    if (success) {
      return {
        statusCode: 200,
        body: JSON.stringify({message}),
      };
    }
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error interno del servidor" }),
    };
  }
};
