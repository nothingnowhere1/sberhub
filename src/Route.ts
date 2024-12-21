import {JSX} from 'react';
import Authorization from './pages/Authorization';
import {BASE_URL} from './Env';
import Main from './pages/Main';
import Personal from "./pages/Personal";

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

