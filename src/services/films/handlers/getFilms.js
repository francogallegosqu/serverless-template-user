const { getFilmsService } = require("../services/getFilms")

module.exports.handler = async (event) => {
  try {

    const results = await getFilmsService();
    return {
        statusCode: 200,
        body: JSON.stringify({results}),
      };
  } catch (error) {
    console.error("Error al obtener films:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error interno del servidor" }),
    };
  }
};
