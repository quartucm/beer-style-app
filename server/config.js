let config = {};

try {
    let localConfig = require('./local.config');
    Object.assign(config, localConfig);
}
catch (e) {
    if (e instanceof Error && e.code === "MODULE_NOT_FOUND")
   		conosle.log('No key');
    else
        throw e;
}

export default config;