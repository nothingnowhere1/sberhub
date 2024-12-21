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
            //TODO ADD SNACKBAR
            i18n.changeLanguage(action.payload)
                .then(() => state.language = action.payload)
                .catch(() => console.log('hui a ne smena language tebe'));
        },
    },
})
