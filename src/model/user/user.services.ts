import {fetcher, useApi} from '../../core/api';

export const apiUserReg = () => {
    return useApi<RegisterDTO, userLoginDto>((args) => fetcher({url: '/auth/register', method: 'POST', data: args}));
};

export const apiUserLog = () => {
    return useApi<LoginDTO, userLoginDto>((args) => fetcher({url: '/auth/login', method: 'POST', data: args}));
};

export const apiUser = ({id}: { id: string }) => {
    return fetcher({url: `/users/${id}`, method: 'GET'});
};