import {configureStore} from '@reduxjs/toolkit'

import {languageSlice} from "./slices/language";
import {sessionSlice} from "./slices/session";
import {userApi} from "./service/user.services";

export const store = configureStore({
    reducer: {
        [languageSlice.reducerPath]: languageSlice.reducer,
        [sessionSlice.reducerPath]: sessionSlice.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
    devTools: {
        name: 'devs',
    },
})

export type AppState = ReturnType<typeof store.getState>
