import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {FormControl, MenuItem, Select, SelectChangeEvent, styled} from "@mui/material";
import {Languages} from "../../../locales/I18n";
import {languageSlice} from "./slice/language";
import * as languageSelectors from "./selector/language";
import {enqueueSnackbar} from "../Snackbar/slice";

const StyledFormControl = styled(FormControl)(({theme}) => ({
    minWidth: theme.breakpoints.down('md') ? '100px' : '200px',
    '& .MuiOutlinedInput-root': {
        background: 'white',
        borderRadius: theme.spacing(2),
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main,
            },
        },
    },
    '& .MuiOutlinedInput-input': {
        padding: theme.spacing(1.5, 2),
    },
    '& .MuiInputLabel-outlined': {
        transform: 'translate(14px, 16px) scale(1)',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
        transform: 'translate(14px, -6px) scale(0.75)',
    },
}));

export default function LanguageSelector() {
    const dispatch = useDispatch()

    const pickedLanguage = useSelector(languageSelectors.pickedLanguage)

    const handleLanguage = useCallback((lang: SelectChangeEvent<Languages>) => {
        dispatch(languageSlice.actions.toggleLanguage(lang.target.value as Languages))
        dispatch(enqueueSnackbar({message: 'Язык изменен', severity: 'success'}))
    }, [])

    return (
        <>
            <StyledFormControl fullWidth>
                <Select
                    variant={'outlined'}
                    value={pickedLanguage}
                    onChange={handleLanguage}
                >
                    <MenuItem value={Languages.ru}>Русский</MenuItem>
                    <MenuItem value={Languages.en}>Английский</MenuItem>
                </Select>
            </StyledFormControl>
        </>
    )
}