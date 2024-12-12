import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import i18n, {Languages} from "../../I18n";

const initialState = {
    language: Languages.ru,
}

export const languageSlice = createSlice({
    initialState,
    name: 'language',
    reducers: {
        toggleLanguage(state, action: PayloadAction<Languages>) {
            state.language = action.payload;
            i18n.changeLanguage(action.payload);
            // const index = SUPPORTED_LANGUAGES.findIndex(lang => lang === state.language);
            // state.language = index === SUPPORTED_LANGUAGES.length - 1 ? SUPPORTED_LANGUAGES[0] : SUPPORTED_LANGUAGES[index + 1]
        },
    },
})
