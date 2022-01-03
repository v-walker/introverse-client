import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LatLng {
    lat: number,
    lng: number
}
export interface MapState {
    currentLocation: LatLng,
    citySearch: string,
    locationQuery: object[],
    mapCenter: LatLng,
    click: LatLng
}

const initialState: MapState = {
    currentLocation: {lat: 0, lng: 0},
    citySearch: "",
    locationQuery: [],
    mapCenter: {lat: 0, lng: 0},
    click: {lat: 0, lng: 0}
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
        },
        updateLocationQuery: (state, action) => {
            state.locationQuery = action.payload
        },
        updateCurrentMapCenter: (state, action) => {
            state.mapCenter = action.payload
        },
        updateClick: (state, action:PayloadAction<any>) => {
            state.click = action.payload
        }
    }
})

export const { updateCurrentLocation, searchCity, updateLocationQuery, updateCurrentMapCenter, updateClick } = mapSlice.actions;

export const selectCitySearch = (state: RootState) => state.map.citySearch;

export const selectCurrentLocation = (state: RootState) => state.map.currentLocation;

export const selectCurrentLocationQuery = (state: RootState) => state.map.locationQuery;

export const selectCurrentMapCenter = (state: RootState) => state.map.mapCenter;

export const selectRecentClick = (state: RootState) => state.map.click;

export default mapSlice.reducer;