/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { InfoWindow } from "react-google-maps";
// import axios from 'axios';

/** Local Components */
import { getGeoInfo, getPopTimesData } from '../utils';
import { useAppDispatch } from '../../app/hooks';
import Map from '../../features/map/Map';
import Marker from '../../features/map/Marker';
import InfoWindow from '../../features/map/InfoWindow';
import { useAppSelector } from '../../app/hooks';
import { selectUserCity, selectUserState } from '../../features/user/userSlice';
import { updateCurrentLocation, selectCurrentLocation, selectCurrentLocationQuery, updateCurrentMapCenter, updateClick, updateSelectedPlace, updatePopTimesData, updateLocationQuery } from '../../features/map/mapSlice';

// Atlanta lat: 33.748995, lng:-84.387982

function MapCardContent(): JSX.Element {
    const dispatch = useAppDispatch();
    const userCity = useAppSelector(selectUserCity);
    const userState = useAppSelector(selectUserState);
    const searchLocation = useAppSelector(selectCurrentLocation);
    const currentLocationQuery = useAppSelector(selectCurrentLocationQuery);
    // const recentClick = useAppSelector(selectRecentClick);

    const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = useState(15); // initial zoom
    const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
        lat: 0,
        lng: 0,
    });
    const [selectedPlaceObj, setSelectedPlaceObj] = useState<any>(null);

    const onClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state

        // console.log(e.latLng);
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

        // run cleanup when component unmounts
        return () => {
            dispatch(updateLocationQuery([]));
        }

        }, []);

    useEffect(() => {
        console.log(clicks);
        dispatch(updateClick(clicks[clicks.length - 1]));
    }, [clicks]);

    useEffect(() => {
        setCenter(searchLocation);
        
        setSelectedPlaceObj(null);

    }, [searchLocation]);

    useEffect(() => {

        dispatch(updateCurrentMapCenter(center));

        setSelectedPlaceObj(null);

    }, [center]);

    useEffect(() => {
        console.log(selectedPlaceObj);
        dispatch(updateSelectedPlace(selectedPlaceObj))

        if (selectedPlaceObj !== null) {
            // dispatch(updatePopTimesData(selectedPlaceObj.place_id))
            getPopTimesData(selectedPlaceObj.place_id).then(response => {
                console.log(response);
                dispatch(updatePopTimesData(response))
            })
        }

    }, [selectedPlaceObj]);
    
    return (
        <div className='map-card'>
            <Wrapper apiKey={`${process.env.REACT_APP_GMAPS_KEY}`} render={render} libraries={["places"]}>
                <Map center={center} zoom={zoom} onClick={onClick} onIdle={onIdle} style={{ flexGrow: "1", height: "100%" }}>

                    {/* to map through currentLocationQuery, set marker position to lat/lng returned */}

                    {currentLocationQuery.map((searchObj: google.maps.places.PlaceResult, i) => {
                        const labelNum = i+1;
                        return (
                            <Marker key={i} position={searchObj.geometry?.location} label={`${labelNum}`} onClick={() => setSelectedPlaceObj(searchObj)} />
                    )
                    })}

                    { selectedPlaceObj && 
                    <InfoWindow position={selectedPlaceObj.geometry?.location} content={`
                        <div class="center-align">
                            <h6>${selectedPlaceObj.name}</h6>
                            <br>
                            ${selectedPlaceObj.formatted_address}
                            <br>
                            <a href="#scroll-to-point">see times recommendations</a>
                        <div>`}>
                    </InfoWindow>

                    }
                </Map>
            </Wrapper>
        </div>
    )
}

export default MapCardContent;
