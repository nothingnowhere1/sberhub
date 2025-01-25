import {JSX} from 'react';
import Personal from "./modules/user/Personal";
import Main from "./modules/main/Main";
import Authorization from "./modules/auth/Authorization";
import {Search} from "./modules/search/Search";
import User from "./modules/user/User";
import TermsOfUse from "./modules/landings/TermsOfUse";
import {CookiePage} from "./modules/landings/CookiePage";
import {PrivacyPolicy} from "./modules/landings/PrivacyPolicy";
import {About} from "./modules/landings/About";
import {getNavigation} from "@brojs/cli";
import {NavigationType} from "../urls";

export enum AllowEnum {
    ALL = 0, AUTHORIZED = 1,
}

const navigation: NavigationType = getNavigation() as NavigationType;

export interface RouteInterface {
    allow: AllowEnum;
    url: string;
    maintenance: boolean;
    component: () => JSX.Element;
    generate?: (id: string | number) => string;
}

export const MaintenanceUrl = `/ConnectMe/maintenance`;

type Params = Record<string, string>

export const generateUrl = (url: string, params: Params) => {
    const reg = /:([^/]+)/;
    while (url.match(reg)) {
        const match = url.match(reg);
        if (match) {
            const param = match[1];
            const value = params[param];
            if (value) {
                url = url.replace(`:${param}`, value);
            } else {
                return navigation['ConnectMe.main'];
            }
        }
    }

    return url;
}

export const RoutePool = {
    MainURL: {allow: AllowEnum.ALL, url: navigation['ConnectMe.main'], maintenance: false, component: Main},
    AuthURL: {allow: AllowEnum.ALL, url: navigation['ConnectMe.auth'], maintenance: false, component: Authorization},
    PersonalURL: {
        allow: AllowEnum.AUTHORIZED,
        url: navigation['ConnectMe.personal'],
        maintenance: false,
        component: Personal
    },
    SearchURL: {
        allow: AllowEnum.AUTHORIZED,
        url: navigation['ConnectMe.search'],
        maintenance: false,
        component: Search
    },
    UserURL: {
        allow: AllowEnum.AUTHORIZED,
        url: navigation['ConnectMe.user'],
        maintenance: false,
        component: User,
        generate: (id: string) => generateUrl(navigation['ConnectMe.user'], {userId: id})
    },
    Terms: {allow: AllowEnum.ALL, url: navigation['ConnectMe.terms'], maintenance: false, component: TermsOfUse},
    Cookie: {allow: AllowEnum.ALL, url: navigation['ConnectMe.cookie'], maintenance: false, component: CookiePage},
    Privacy: {allow: AllowEnum.ALL, url: navigation['ConnectMe.privacy'], maintenance: false, component: PrivacyPolicy},
    About: {allow: AllowEnum.ALL, url: navigation['ConnectMe.about'], maintenance: false, component: About},
};

