import React, { useEffect, useState } from 'react';
import Map from '../../features/map/Map';
// import Marker from '../../features/map/Marker';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import axios from 'axios';

// Atlanta lat: 33.748995, lng:-84.387982

/**
 * 
 * function takes in two strings: city, state and returns a promise containing geocoding location data from Google Maps Geocoding API
 * 
 * for more information regarding this API and the data returned from it, please refer to https://developers.google.com/maps/documentation/geocoding/requests-geocoding#json
 * 
 * @param city 
 * @param state 
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
    const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = useState(14); // initial zoom
    // const [lat, setLat] = useState(33.748995); // initial lat
    // const [lng, setLng] = useState(-84.387982); // initial lng
    const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
        lat: 33.748995,
        lng: -84.387982,
    });

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

            getGeoInfo("Los Angeles", "California").then(results => console.log(results));
            getGeoInfo("Los Angeles", "California").then(results => {
                
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
