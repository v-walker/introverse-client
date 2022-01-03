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
    click: LatLng,
    placeSearchType: string
}

const initialState: MapState = {
    currentLocation: {lat: 0, lng: 0},
    citySearch: "",
    locationQuery: [],
    mapCenter: {lat: 0, lng: 0},
    click: {lat: 0, lng: 0},
    placeSearchType: ""
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
        updateLocationQuery: (state, action:PayloadAction<any>) => {
            state.locationQuery = action.payload
        },
        updateCurrentMapCenter: (state, action:PayloadAction<any>) => {
            state.mapCenter = action.payload
        },
        updateClick: (state, action:PayloadAction<any>) => {
            state.click = action.payload
        },
        updatePlaceSearchType: (state, action:PayloadAction<string>) => {
            state.placeSearchType = action.payload
        }
    }
})

export const { updateCurrentLocation, searchCity, updateLocationQuery, updateCurrentMapCenter, updateClick, updatePlaceSearchType } = mapSlice.actions;

export const selectCitySearch = (state: RootState) => state.map.citySearch;

export const selectCurrentLocation = (state: RootState) => state.map.currentLocation;

export const selectCurrentLocationQuery = (state: RootState) => state.map.locationQuery;

export const selectCurrentMapCenter = (state: RootState) => state.map.mapCenter;

export const selectRecentClick = (state: RootState) => state.map.click;

export const selectPlaceSearchType = (state: RootState) => state.map.placeSearchType;

export default mapSlice.reducer;