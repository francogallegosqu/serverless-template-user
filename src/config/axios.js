const axios = require("axios");
const { loadEnv, getEnvVariable } = require("./env");
const envConfig = loadEnv();
const API_URL = getEnvVariable(envConfig, "dev", "API_URL");
const instance = axios.create({
  baseURL: API_URL,
});
module.exports = {
  axios: instance,
  get: instance.get,
  post: instance.post,
};
