import axios from "axios";

const statesArray: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

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

export { statesArray, getGeoInfo };