let config = {};

try {
    let localConfig = require('./local.config');
    Object.assign(config, localConfig);
}
catch (e) {
    if (e instanceof Error && e.code === "MODULE_NOT_FOUND")
    	Object.assign(config, {API_KEY: process.env.API_KEY});
    else
        throw e;
}

export default config;