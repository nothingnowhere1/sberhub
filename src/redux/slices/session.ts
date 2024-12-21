import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    session: null as null | userLoginDto,
}

export const sessionSlice = createSlice({
    initialState,
    name: 'session',
    reducers: {
        setSession(state, action: PayloadAction<userLoginDto>) {
            state.session = action.payload;
            window.localStorage.setItem('token', JSON.stringify(action.payload.token));
        },
        signOut(state) {
            state.session = null;
            window.localStorage.removeItem('token');
        }
    },
})
