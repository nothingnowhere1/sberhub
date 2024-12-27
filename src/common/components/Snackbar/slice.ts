import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SnackbarSetState {
    message: string,
    severity?: 'success' | 'info' | 'warning' | 'error',
    timeout?: number,
    key?: string
}

export interface SnackbarState {
    message: string,
    severity: 'success' | 'info' | 'warning' | 'error',
    timeout: number,
    key: string
}

const initialState = {
    snackbars: {} as Record<string, SnackbarState>,
    id: 1
}

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: initialState,
    reducers: {
        enqueueSnackbar: (state, action: PayloadAction<SnackbarSetState>) => {
            const snackbar = {
                message: action.payload.message,
                severity: action.payload.severity || 'info',
                timeout: action.payload.timeout || 3000,
                key: `snackbar_${state.id}`
            }
            state.id++;
            state.snackbars[snackbar.key] = snackbar;
        },
        dequeueSnackbar: (state, action: PayloadAction<{ key: string }>) => {
            delete state.snackbars[action.payload.key];
        },
    },
});

export const {enqueueSnackbar, dequeueSnackbar} = snackbarSlice.actions;