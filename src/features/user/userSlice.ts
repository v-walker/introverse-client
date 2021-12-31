import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserState {
    finalScore: number,
    email: string,
    homeCity: string,
    homeState: string,
    password: string
};

export interface PayloadUserInfo {
    email: string,
    homeCity: string,
    homeState: string,
    password: string
}

const initialState: UserState = {
    finalScore: 0,
    email: "",
    homeCity: "",
    homeState: "",
    password: ""
};

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        finalScore: (state, action: PayloadAction<number>) => {
            state.finalScore = action.payload
        },
        userSignUp: (state, action:  PayloadAction<PayloadUserInfo>) => {
            state.email = action.payload.email
            state.homeCity = action.payload.homeCity
            state.homeState = action.payload.homeState
            state.password = action.payload.password
        }
    }
});

export const { finalScore, userSignUp } = userSlice.actions;

export const selectFinalScore = (state: RootState) => state.user.finalScore;

export const selectUserCity = (state: RootState) => state.user.homeCity;

export const selectUserState = (state: RootState) => state.user.homeState;

export default userSlice.reducer