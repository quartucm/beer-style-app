let config = {};

try {
    let localConfig = require('./local.config');
    Object.assign(config, localConfig);
}
catch (e) {
    Object.assign(config, {API_KEY: process.env.API_KEY});

}

export default config;