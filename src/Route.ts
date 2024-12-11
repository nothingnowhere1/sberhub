import {JSX} from 'react';
import Authorization from './pages/Authorization';
import {BASE_URL} from './Env';
import Main from './pages/Main';

export enum AllowEnum {
    ALL = 0, AUTHORIZED = 1,
}

export interface RouteInterface {
    allow: AllowEnum;
    url: string;
    maintenance: boolean;
    component: () => JSX.Element;
}

export const MainUrl = `${BASE_URL}`;
export const AuthUrl = `${BASE_URL}/login`;
export const MaintenanceUrl = `${BASE_URL}/maintenance`;

export const RoutePool: RouteInterface[] = [{
    allow: AllowEnum.AUTHORIZED, url: `${BASE_URL}`, maintenance: false, component: Main
}, {
    allow: AllowEnum.ALL, url: `${BASE_URL}/login`, maintenance: false, component: Authorization
}];

