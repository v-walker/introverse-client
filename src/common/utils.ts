import axios from "axios";

export interface PlaceTypeObj {
    displayName: string,
    value: string
}

const statesArray: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

const placeTypesArray: PlaceTypeObj[] = [
    {displayName: "Airport", value: "airport"},
    {displayName: "Aquarium", value: "aquarium"},
    {displayName: "Art Gallery", value: "art_gallery"},
    {displayName: "ATM", value: "atm"},
    {displayName: "Bakery", value: "bakery"},
    {displayName: "Bank", value: "bank"},
    {displayName: "Bar", value: "bar"},
    {displayName: "Beauty Salon", value: "beauty_salon"},
    {displayName: "Book Store", value: "book_store"},
    {displayName: "Bus Station", value: "bus_station"},
    {displayName: "Cafe", value: "cafe"},
    {displayName: "Campground", value: "campground"},
    {displayName: "Car Dealer", value: "car_dealer"},
    {displayName: "Car Rental", value: "car_rental"},
    {displayName: "Car Repair", value: "car_repair"},
    {displayName: "Cemetery", value: "cemetery"},
    {displayName: "Church", value: "church"},
    {displayName: "City Hall", value: "city_hall"},
    {displayName: "Clothing Store", value: "clothing_store"},
    {displayName: "Convenience Store", value: "convenience_store"},
    {displayName: "Courthouse", value: "courthouse"},
    {displayName: "Dentist", value: "dentist"},
    {displayName: "Department Store", value: "department_store"},
    {displayName: "Doctor", value: "doctor"},
    {displayName: "Drugstore", value: "drugstore"},
    {displayName: "Florist", value: "florist"},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
    {displayName: "", value: ""},
]

/**
 * 
 * getGeoInfo() function takes in two strings: city, state and returns a promise containing geocoding location data from Google Maps Geocoding API
 * 
 * for more information regarding this API and the data returned from it, please refer to https://developers.google.com/maps/documentation/geocoding/requests-geocoding#json
 * 
 * @param city: string 
 * @param state: string 
 * @returns Promise<any>
 */

const getGeoInfo = async (city: string, state: string): Promise<any> => {
    try {
        let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}+${state}&key=${process.env.REACT_APP_GMAPS_KEY}`);

        if (response.status === 200) {
            return response.data;
        }

    } catch (err) {
        
        return err
    }
    
}

export { statesArray, placeTypesArray, getGeoInfo };