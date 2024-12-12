const pkg = require('./package');

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${process.env.VERSION ? 'sberhub' : pkg.name}/${process.env.VERSION || pkg.version}/`
        }
    },
    /* use https://admin.bro-js.ru/ to create config, navigations and features */
    navigations: {
        'connectme.main': '/connectme'
    },
    features: {
        'connectme': {
            // add your features here in the format [featureName]: { value: string }
        }
    },
    config: {
        'connectme.api': '/api'
    }
};
