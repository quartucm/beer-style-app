const config = {};

try {
  const localConfig = require('./local.config');
  Object.assign(config, localConfig);
} catch (e) {
  Object.assign(config, { API_KEY: process.env.API_KEY });
}

module.exports = config;
