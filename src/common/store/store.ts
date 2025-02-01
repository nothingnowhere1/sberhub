import {configureStore} from '@reduxjs/toolkit'
import {userApi} from "../../modules/user/store/services/user.services";
import {sessionSlice} from "../../modules/user/store/slices/session";
import {languageSlice} from "../components/LanguageSelector/slice/language";
import {snackbarSlice} from "../components/Snackbar/slice";
import sidebarSlice from "../components/Sidebar/slice/sidebar";


export const store = configureStore({
    reducer: {
        [languageSlice.reducerPath]: languageSlice.reducer,
        [sessionSlice.reducerPath]: sessionSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [snackbarSlice.reducerPath]: snackbarSlice.reducer,
        [sidebarSlice.reducerPath]: sidebarSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
    devTools: {
        name: 'devs',
    },
})

export type AppState = ReturnType<typeof store.getState>
