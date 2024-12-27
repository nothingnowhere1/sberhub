import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {userDto, userLoginDto} from "../../types/user.types";

const initialState = {
    token: null as null | string,
    user: null as null | userDto
}

export const sessionSlice = createSlice({
    initialState,
    name: 'session',
    reducers: {
        setSession(state, action: PayloadAction<userLoginDto>) {
            state.token = action.payload.token;
            window.localStorage.setItem('token', JSON.stringify(action.payload.token));
        },
        signOut(state) {
            state.token = null;
            state.user = null;
            window.localStorage.removeItem('token');
        },
        setUser(state, action: PayloadAction<userDto>) {
            state.user = action.payload;
        },
        setAll(state, action: PayloadAction<userDto & { token: string }>) {
            const {token, ...user} = action.payload;
            state.token = token;
            state.user = user;
        }
    },
})
