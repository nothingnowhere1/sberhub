import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Languages} from "../../../../locales/I18n";
import i18n from "i18next";
import {enqueueSnackbar} from "../../Snackbar/slice";

const initialState = {
    language: Languages.ru,
}

export const languageSlice = createSlice({
    initialState,
    name: 'language',
    reducers: {
        toggleLanguage(state, action: PayloadAction<Languages>) {
            enqueueSnackbar({message: 'Язык изменен', severity: 'success'})
            void i18n.changeLanguage(action.payload);
            state.language = action.payload
        },
    },
})
