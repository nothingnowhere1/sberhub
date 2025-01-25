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
        "ConnectMe.main": "/ConnectMe",
        "ConnectMe.auth": "/ConnectMe/login",
        "ConnectMe.terms": "/ConnectMe/terms",
        "ConnectMe.privacy": "/ConnectMe/privacy",
        "ConnectMe.cookie": "/ConnectMe/cookie",
        "ConnectMe.about": "/ConnectMe/about",
        "ConnectMe.search": "/ConnectMe/search",
        "ConnectMe.personal": "/ConnectMe/personal",
        "ConnectMe.user": "/ConnectMe/user/:userId",
    },
    features: {
        'connectme': {
            // add your features here in the format [featureName]: { value: string }
        }
    },
    config: {
        "ConnectMe.API_URL": "https://antd-table-v2-backend.onrender.com/api",
        "ConnectMe.MEDIA_URL": "https://ucarecdn.com"
    }
};
