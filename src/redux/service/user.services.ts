import {createApi,} from '@reduxjs/toolkit/query/react'
import {AuthorizationSchemaType} from "../../model/user/user.zod";
import {reduxFetcher} from "../../core/api";

export const userApi = createApi({
    reducerPath: 'user-api',
    baseQuery: reduxFetcher(),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        loginUser: builder.mutation<userLoginDto, AuthorizationSchemaType>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),
        regUser: builder.mutation<userLoginDto, RegisterDTO>({
            query: (body) => ({
                url: '/auth/register',
                method: 'POST',
                body,
            }),
        }),
    }),
})
