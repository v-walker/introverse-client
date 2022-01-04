
   
// @ts-nocheck
import { createSlice, PayloadAction, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

export interface UserState {
    finalScore: number,
    email: string,
    username:string,
    homeCity: string,
    homeState: string,
    isSuccess: boolean,
    isError: boolean,
    errorMessage:string,
    introvertRating: number
    password: string
};

export interface PayloadUserInfo {
    email: string,
    username:string,
    password:string
    homeCity: string,
    homeState: string,
    
}
export interface PayloadUserLoginInfo {
    email: string,
    password:string

}

const initialState: UserState = {
    finalScore: 0,
    email: "",
    username:"",
    homeCity: "",
    homeState: "",
    password: "",
    isSuccess: false,
    isError: false,
    errorMessage: "",
    introvertRating: 0
};


export const userSignUp:AsyncThunk<any,any,{}> = createAsyncThunk(
"users/userSignUp",
async (formData, thunkAPI) => {
    try {
    const response = await axios.post("/register", formData)
    console.log(" response data", response)

    if (response.status === 200) {
        localStorage.setItem("token", response.data.token)
        return response.data
    } else {
        return thunkAPI.rejectWithValue(response.data)
    }    
    } catch (e) {
    console.log("Error:", e.response.data)
    return thunkAPI.rejectWithValue(e.response.data)
    }
}
)


export const loginUser:AsyncThunk<any,any,{}> = createAsyncThunk(
"users/login",
async (formData, thunkAPI) => {
    try {
        console.log('formData',formData)
        const response = await axios.post("/login",formData)
        
    console.log('response',response)

    if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        return response.data
    } else {
        return thunkAPI.rejectWithValue(data);
    }
    } catch (e) {
        console.log(e, 'e')
    console.log('Error', e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
    }
}
);

export const updateIntrovertRating:AsyncThunk<any,any,{}> = createAsyncThunk(
"users/updateIntrovertRating",
async (formData, thunkAPI) => {
        console.log(formData)
        try {
            const response = await axios.put("/introvertrating", formData)
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            return response.data
        } else {
            return thunkAPI.rejectWithValue(data);
        }
        } catch (e) {
            console.log(e, 'e')
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

            console.log(" response data", response)

    if (response.status === 200) {
        return { ...response };
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

            return state;
    },
        finalScore: (state, action: PayloadAction<number>) => {
            state.finalScore = action.payload
        },
    },
    extraReducers: {
    [userSignUp.fulfilled]: (state, { payload }) => {
        state.isSuccess = true;
        state.email = payload.email;
        state.username = payload.username;
        state.homeCity = payload.homeCity
        state.homeState = payload.homeState
        state.introvertRating = payload.introvertRating
        },
        [userSignUp.rejected]: (state, { payload }) => {
        state.isError = true;
        state.errorMessage = payload.message;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            console.log('payload',payload)
        state.email = payload.email;
        state.username = payload.username;
        state.homeCity = payload.homeCity
        state.homeState = payload.homeState
        state.introvertRating = payload.introvertRating
        state.isSuccess = true;
        return state;
        },
        [loginUser.rejected]: (state, { payload }) => {
        state.isError = true;
        state.errorMessage = payload.message;
        },
        [fetchUserBytoken.fulfilled]: (state, { payload }) => {
        state.isSuccess = true;
        state.email = payload.email;
        state.username = payload.name;
        },

        [fetchUserBytoken.rejected]: (state) => {
        console.log('fetchUserBytoken rejected');
        state.isError = true;
        },
    
    },
});

export const { finalScore, clearState } = userSlice.actions;

export const selectFinalScore = (state: RootState) => state.user.finalScore;

export const selectUserEmail = (state: RootState) => state.user.email;

export const selectUserCity = (state: RootState) => state.user.homeCity;

export const selectUserState = (state: RootState) => state.user.homeState;

export const selectUserPW = (state: RootState) => state.user.password;

export default userSlice.reducer

export const userSelector = (state: RootState) => state.user