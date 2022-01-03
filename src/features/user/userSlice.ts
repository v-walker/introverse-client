// @ts-nocheck
import { createSlice, PayloadAction, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios, { AxiosResponse } from 'axios';

export interface UserState {
    finalScore: number,
    email: string,
    homeCity: string,
    homeState: string,
    password: string,
    isFetching: boolean,
    isSuccess: boolean,
    isError: boolean,
    errorMessage:string,
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
    password: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};


export const userSignUp:AsyncThunk<any,any,{}> = createAsyncThunk(
"users/userSignUp",
async (formData, thunkAPI) => {
    try {
    const response = await axios.post("/register",formData)

    let data = await response.json()

    console.log("data", data)

    if (response.status === 200) {
        localStorage.setItem("token", data.token)
        return { ...data, email: email }
    } else {
        return thunkAPI.rejectWithValue(data)
    }
    } catch (e) {
    console.log("Error", e.response.data)
    return thunkAPI.rejectWithValue(e.response.data)
    }
}
)


export const loginUser:AsyncThunk<any,any,{}> = createAsyncThunk(
"users/login",
async (formData, thunkAPI) => {
    try {
        const response = await axios.post("/login",formData)
    let data = await response.json();

    console.log('response', data);

    if (response.status === 200) {
        localStorage.setItem('token', data.token);
        return data;
    } else {
        return thunkAPI.rejectWithValue(data);
    }
    } catch (e) {
    console.log('Error', e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
    }
}
);

export const fetchUserBytoken = createAsyncThunk(
'users/fetchUserByToken',
async ({ token }, thunkAPI) => {
    try {
        const response = await axios.get("/protected",{
            headers: {
                'authorization': localStorage.token
            }})

    let data = await response.json();
    console.log('data', data, response.status);

    if (response.status === 200) {
        return { ...data };
    } else {
        return thunkAPI.rejectWithValue(data);
    }
    } catch (e) {
    console.log('Error', e.response.data);
    return thunkAPI.rejectWithValue(e.response.data);
    }
}
);

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
        finalScore: (state, action: PayloadAction<number>) => {
            state.finalScore = action.payload
        },
    },
    extraReducers: {
    [userSignUp.fulfilled]: (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.email = payload.user.email;
        state.homeCity = payload.payload.homeCity
        state.homeState = payload.payload.homeState
        },
        [userSignUp.pending]: (state) => {
        state.isFetching = true;
        },
        [userSignUp.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
        state.email = payload.email;
        state.username = payload.name;
        state.isFetching = false;
        state.isSuccess = true;
        return state;
        },
        [loginUser.rejected]: (state, { payload }) => {
        console.log('payload', payload);
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
        },
        [loginUser.pending]: (state) => {
        state.isFetching = true;
        },
        [fetchUserBytoken.pending]: (state) => {
        state.isFetching = true;
        },
        [fetchUserBytoken.fulfilled]: (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.email = payload.email;
        state.username = payload.name;
        },
        [fetchUserBytoken.rejected]: (state) => {
        console.log('fetchUserBytoken');
        state.isFetching = false;
        state.isError = true;
        },
    
    },
});
    



export const { finalScore,clearState} = userSlice.actions;

export const selectFinalScore = (state: RootState) => state.user.finalScore;

export const selectUserEmail = (state: RootState) => state.user.email;

export const selectUserCity = (state: RootState) => state.user.homeCity;

export const selectUserState = (state: RootState) => state.user.homeState;

export const selectUserPW = (state: RootState) => state.user.password;

export default userSlice.reducer

export const userSelector = (state: RootState) => state.user