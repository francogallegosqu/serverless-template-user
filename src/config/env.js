const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path')

const loadEnv = () => {
  try {
    const envPath = path.resolve(__dirname, '../../env.yml');
    const envConfig = yaml.load(fs.readFileSync(envPath, 'utf8'));
    return envConfig;
  } catch (error) {
    console.error('Error al cargar el archivo de variables de entorno:', error);
    throw error;
  }
};

const getEnvVariable = (envConfig, env, variable) => {
  if (!envConfig[env] || !envConfig[env][variable]) {
    throw new Error(`Variable de entorno ${variable} no encontrada para el entorno ${env}`);
  }
  return envConfig[env][variable];
};

module.exports = {
  loadEnv,
  getEnvVariable
};
