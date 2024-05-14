const axios = require("axios");
const { loadEnv, getEnvVariable } = require("./env");

class AxiosInstance {
  constructor() {
    if (!AxiosInstance.instance) {
      const envConfig = loadEnv();
      const API_URL = getEnvVariable(envConfig, "dev", "API_URL");
      this.instance = axios.create({
        baseURL: API_URL,
      });
      AxiosInstance.instance = this;
    }

    return AxiosInstance.instance;
  }

  getInstance() {
    return this.instance;
  }
}

module.exports = new AxiosInstance();
