const { getUsersService } = require("../services/getUserService");
module.exports.handler = async (event) => {
  try {

    const {success, result} = await getUsersService();
    if (success) {
      return {
        statusCode: 200,
        body: JSON.stringify({result}),
      };
    }
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error interno del servidor" }),
    };
  }
};
