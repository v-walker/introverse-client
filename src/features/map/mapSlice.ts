// import axios from 'axios';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LatLng {
    lat: number;
    lng: number;
}
export interface MapState {
    currentLocation: LatLng;
    citySearch: string;
    locationQuery: object[];
    mapCenter: LatLng;
    click: LatLng;
    placeSearchType: string;
    selectedPlace: google.maps.places.PlaceResult | null;
    // status: 'idle' | 'loading' | 'failed',
    popTimesData: any;
}

const initialState: MapState = {
    currentLocation: {lat: 0, lng: 0},
    citySearch: "",
    locationQuery: [],
    mapCenter: {lat: 0, lng: 0},
    click: {lat: 0, lng: 0},
    placeSearchType: "",
    selectedPlace: null,
    popTimesData: null
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
        },
        updateSelectedPlace: (state, action:PayloadAction<google.maps.places.PlaceResult | null>) => {
            state.selectedPlace = action.payload
        },
        updatePopTimesData: (state, action:PayloadAction<any>) => {
            state.popTimesData = action.payload
        }
    },
});

export const { updateCurrentLocation, searchCity, updateLocationQuery, updateCurrentMapCenter, updateClick, updatePlaceSearchType, updateSelectedPlace, updatePopTimesData } = mapSlice.actions;

export const selectCitySearch = (state: RootState) => state.map.citySearch;

export const selectCurrentLocation = (state: RootState) => state.map.currentLocation;

export const selectCurrentLocationQuery = (state: RootState) => state.map.locationQuery;

export const selectCurrentMapCenter = (state: RootState) => state.map.mapCenter;

export const selectRecentClick = (state: RootState) => state.map.click;

export const selectPlaceSearchType = (state: RootState) => state.map.placeSearchType;

export const selectSelectedPlace = (state: RootState) => state.map.selectedPlace;

export const selectPopTimesData = (state: RootState) => state.map.popTimesData;

export default mapSlice.reducer;