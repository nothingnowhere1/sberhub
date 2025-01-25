const navigations = {
    "ConnectMe.main": "/ConnectMe",
    "ConnectMe.auth": "/ConnectMe/login",
    "ConnectMe.terms": "/ConnectMe/terms",
    "ConnectMe.privacy": "/ConnectMe/privacy",
    "ConnectMe.cookie": "/ConnectMe/cookie",
    "ConnectMe.about": "/ConnectMe/about",
    "ConnectMe.search": "/ConnectMe/search",
    "ConnectMe.personal": "/ConnectMe/personal",
    "ConnectMe.user": "/ConnectMe/user/:userId",
}

type NavigationsKey = keyof typeof navigations;

export type NavigationType = Record<NavigationsKey, string>;

const config = {
    "ConnectMe.API_URL": "https://antd-table-v2-backend.onrender.com/api",
    "ConnectMe.MEDIA_URL": "https://ucarecdn.com"
}

type ConfigKey = keyof typeof config;

export type ConfigType = Record<ConfigKey, string>;

