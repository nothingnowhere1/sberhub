import {JSX} from 'react';
import {BASE_URL} from './Env';
import Personal from "./modules/user/Personal";
import Main from "./modules/main/Main";
import Authorization from "./modules/auth/Authorization";

export enum AllowEnum {
    ALL = 0, AUTHORIZED = 1,
}

export interface RouteInterface {
    allow: AllowEnum;
    url: string;
    maintenance: boolean;
    component: () => JSX.Element;
}

export const MaintenanceUrl = `${BASE_URL}/maintenance`;

export const RoutePool = {
    MainURL: {allow: AllowEnum.ALL, url: `${BASE_URL}`, maintenance: false, component: Main},
    AuthURl: {allow: AllowEnum.ALL, url: `${BASE_URL}/login`, maintenance: false, component: Authorization},
    PersonalURL: {allow: AllowEnum.AUTHORIZED, url: `${BASE_URL}/personal`, maintenance: false, component: Personal}
};

