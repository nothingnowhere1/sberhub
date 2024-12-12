import {configureStore} from '@reduxjs/toolkit'

import {languageSlice} from "./slices/language";

export const store = configureStore({
    reducer: {
        [languageSlice.reducerPath]: languageSlice.reducer,
    },
    devTools: {
        name: 'bro-cms',
    },
})

export type AppState = ReturnType<typeof store.getState>
