import {fetcher, useApi} from '../../core/api';

export const apiUserReg = () => {
    return useApi<RegisterDTO, any>((args) => fetcher({url: '/auth/register', method: 'POST', data: args}));
};

export const apiUserLog = () => {
    return useApi<LoginDTO, any>((args) => fetcher({url: '/auth/login', method: 'POST', data: args}));
};