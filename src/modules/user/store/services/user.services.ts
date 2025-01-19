import {createApi,} from '@reduxjs/toolkit/query/react'
import {sessionSlice} from "../slices/session";
import {RegisterDTO, userDto, userLoginDto, userUpdateDto} from "../../types/user.types";
import {AuthorizationSchemaType} from "../../types/user.zod";
import {reduxFetcher} from "../../../../common/core/api";
import {TypeID} from "../../../../common/types/baseTypes";

export const userApi = createApi({
    reducerPath: 'user-api',
    baseQuery: reduxFetcher(),
    tagTypes: ['User', 'CheckUser', 'Users'],
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
        updateUser: builder.mutation<userDto, userUpdateDto & { id: TypeID, token: string }>({
            invalidatesTags: ['CheckUser', 'User'],
            query: ({id, token, ...body}) => {
                return {
                    url: `/users/${id}`,
                    method: 'PUT',
                    body: {...body, _id: id},
                    headers: {authorization: `Bearer ${token}`},
                }
            },
        }),
        getUser: builder.query<userDto, { id: TypeID, token: string }>({
            providesTags: ['CheckUser'],
            query: ({id, token}) => {
                return {
                    url: `/users/${id}`,
                    method: 'GET',
                    headers: {authorization: `Bearer ${token}`},
                }
            },
        }),
        getUserList: builder.query<{ count: number, data: userDto[] }, { token: string }>({
            providesTags: ['Users'],
            query: ({token}) => {
                return {
                    url: `/users`,
                    method: 'GET',
                    headers: {authorization: `Bearer ${token}`},
                }
            },
        }),
        checkAuth: builder.query<userDto, string>({
            providesTags: ['User'],
            query: (token) => ({
                url: '/auth/check',
                method: 'GET',
                headers: {authorization: `Bearer ${token}`},
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    dispatch(sessionSlice.actions.setAll({...data, token: arg}));
                } catch (error) {
                    console.error('Failed to fetch data: ', error);
                }
            },
        }),
    }),
})
