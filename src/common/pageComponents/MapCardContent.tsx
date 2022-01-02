/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import axios from 'axios';

/** Local Components */
import { getGeoInfo } from '../utils';
import { useAppDispatch } from '../../app/hooks';
import Map from '../../features/map/Map';
import Marker from '../../features/map/Marker';
import { useAppSelector } from '../../app/hooks';
import { selectUserCity, selectUserState } from '../../features/user/userSlice';
import { updateCurrentLocation, selectCurrentLocation, selectCurrentLocationQuery } from '../../features/map/mapSlice';

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

function MapCardContent(): JSX.Element {
    const dispatch = useAppDispatch();
    const userCity = useAppSelector(selectUserCity);
    const userState = useAppSelector(selectUserState);
    const searchLocation = useAppSelector(selectCurrentLocation);
    const currentLocationQuery = useAppSelector(selectCurrentLocationQuery);

    const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = useState(14); // initial zoom
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
        
        getGeoInfo(userCity, userState).then(results => {
            
            setCenter({lat: results.results[0].geometry.location.lat, lng: results.results[0].geometry.location.lng});

            dispatch(updateCurrentLocation({lat: results.results[0].geometry.location.lat, lng: results.results[0].geometry.location.lng}));
        });

        }, []);

    // useEffect(() => {
    //     console.log(clicks);
    // }, [clicks])

    // useEffect(() => {
    //     // console.log(currentLocationQuery)
    //     currentLocationQuery.map((searchObj: google.maps.places.PlaceResult) => {
    //         console.log(searchObj.geometry?.location)
    //         return null
    //     })
    // }, [currentLocationQuery])

    useEffect(() => {
        setCenter(searchLocation)

    }, [searchLocation]);
    
    return (
        <div className='map-card'>
            <Wrapper apiKey={`${process.env.REACT_APP_GMAPS_KEY}`} render={render} libraries={["places"]}>
                <Map center={center} zoom={zoom} onClick={onClick} onIdle={onIdle} style={{ flexGrow: "1", height: "100%" }}>
                    {/* {clicks.map((latLng, i) => (
                        <Marker key={i} position={latLng} />
                    ))} */}

                    {/* to map through currentLocationQuery, set marker position to lat/lng returned */}

                    {currentLocationQuery.map((searchObj: google.maps.places.PlaceResult, i) => {
                        return (
                        <Marker key={i} position={searchObj.geometry?.location} />
                    )
                    })}
                </Map>
            </Wrapper>
        </div>
    )
}

export default MapCardContent;
