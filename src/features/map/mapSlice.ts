import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LatLng {
    lat: number,
    lng: number
}
export interface MapState {
    currentLocation: LatLng,
    citySearch: string
}

const initialState: MapState = {
    currentLocation: {lat: 0, lng: 0},
    citySearch: ""
}

export const mapSlice = createSlice({
    name: 'Map',
    initialState,
    reducers: {
        updateCurrentLocation: (state, action: PayloadAction<LatLng>) => {
            state.currentLocation = action.payload
        },
        searchCity: (state, action: PayloadAction<string>) => {
            state.citySearch = action.payload
        }
    }
})

export const { updateCurrentLocation, searchCity } = mapSlice.actions;

export const selectCitySearch = (state: RootState) => state.map.citySearch;

export const selectCurrentLocation = (state: RootState) => state.map.currentLocation;

export default mapSlice.reducer;