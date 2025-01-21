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
    id: 1,
    showAgain: false
}

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: initialState,
    reducers: {
        enqueueSnackbar: (state, action: PayloadAction<SnackbarSetState>) => {
            const snackbar = {
                message: action.payload.message,
                severity: action.payload.severity ?? 'info',
                timeout: action.payload.timeout ?? 3000,
                key: action.payload.key ?? `snackbar_${state.id}`
            }
            if (!action.payload.key) state.id++;
            state.snackbars[snackbar.key] = snackbar;
        },
        dequeueSnackbar: (state, action: PayloadAction<{ key: string }>) => {
            delete state.snackbars[action.payload.key];
        },
        showHistory: (state) => {
            state.showAgain = true
        },
        historyShowed: (state) => {
            state.showAgain = false
        }
    },
});

export const {enqueueSnackbar, dequeueSnackbar, showHistory, historyShowed} = snackbarSlice.actions;