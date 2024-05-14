const Joi = require("joi");

const createUserSchema = Joi.object({
  nombre: Joi.string().required(),
  altura: Joi.string().required(),
  ojo_color: Joi.string().required(),
  pelo_color: Joi.string().required(),
  peso: Joi.string().required(),
  piel_color: Joi.string().required(),
  nacimiento_anio: Joi.string().pattern(/^\d{2}\/\d{2}\/\d{4}$/),
  genero: Joi.string().required(),
  vehiculos: Joi.array().items(Joi.string()),
});

module.exports = { createUserSchema}