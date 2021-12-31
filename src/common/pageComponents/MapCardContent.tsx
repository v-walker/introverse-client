import React, { useEffect, useState } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import axios from 'axios';

/** Local Components */
import Map from '../../features/map/Map';
// import Marker from '../../features/map/Marker';
import { useAppSelector } from '../../app/hooks';
import { selectUserCity, selectUserState } from '../../features/user/userSlice';

// Atlanta lat: 33.748995, lng:-84.387982

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

function MapCardContent(): JSX.Element {
    const userCity = useAppSelector(selectUserCity);
    const userState = useAppSelector(selectUserState);

    const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = useState(14); // initial zoom
    const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
        lat: 33.748995,
        lng: -84.387982,
    });
    const [userCitySearch, setUserCitySearch] = useState("");

    const onClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng!]);
    };

    const onIdle = (m: google.maps.Map) => {
        console.log("onIdle");
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    };


    const render = (status: Status) => {
        return <h1>{status}</h1>
    }

    useEffect(() => {

            getGeoInfo(userCity, userState).then(results => console.log(results));
            getGeoInfo(userCity, userState).then(results => {
                
                setCenter({lat: results.results[0].geometry.location.lat, lng: results.results[0].geometry.location.lng})
                
            });

        }, []);
    
    return (
        <div className='map-card'>
            <Wrapper apiKey={`${process.env.REACT_APP_GMAPS_KEY}`} render={render}>
                <Map center={center} zoom={zoom} onClick={onClick} onIdle={onIdle} style={{ flexGrow: "1", height: "100%" }}>
                    {/* {clicks.map((latLng, i) => (
                        <Marker key={i} position={latLng} />
                    ))} */}
                </Map>
            </Wrapper>
        </div>
    )
}

export default MapCardContent;
