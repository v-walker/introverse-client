import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface MapState {
    citySearch: string
}

const initialState: MapState = {
    citySearch: ""
}

export const mapSlice = createSlice({
    name: 'Map',
    initialState,
    reducers: {
        searchCity: (state, action: PayloadAction<string>) => {
            state.citySearch = action.payload
        }
    }
})

export const { searchCity } = mapSlice.actions;

export default mapSlice.reducer;