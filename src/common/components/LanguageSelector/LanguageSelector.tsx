import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {Languages} from "../../../locales/I18n";
import {languageSlice} from "./slice/language";
import * as languageSelectors from "./selector/language";

export default function LanguageSelector() {
    const dispatch = useDispatch()

    const pickedLanguage = useSelector(languageSelectors.pickedLanguage)

    const handleLanguage = useCallback((lang: SelectChangeEvent<Languages>) => {
        dispatch(languageSlice.actions.toggleLanguage(lang.target.value as Languages))
    }, [])

    return (
        <>
            <FormControl fullWidth>
                <InputLabel>Язык</InputLabel>
                <Select
                    variant={'standard'}
                    value={pickedLanguage}
                    label="Age"
                    onChange={handleLanguage}
                >
                    <MenuItem value={Languages.ru}>ru</MenuItem>
                    <MenuItem value={Languages.en}>en</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}