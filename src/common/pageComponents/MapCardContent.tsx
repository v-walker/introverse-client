import React, { useEffect } from 'react';
import Map from '../../features/map/Map';
// import Marker from '../../features/map/Marker';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// Atlanta lat: 33.748995, lng:-84.387982

// const geocoder = new google.maps.Geocoder();

// const getGeocodeInfo = (locationString: string) => {
    
//     geocoder.geocode( { 'address': locationString}, function(results, status) {
//         if (status === 'OK' && results) {
//         return (results[0].geometry.location);
//         } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//         }
//     });
// }

function MapCardContent(): JSX.Element {
    const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = React.useState(14); // initial zoom
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

    // useEffect(() => {
    //     console.log(getGeocodeInfo("Atlanta, Georgia, USA"))
    // }, [])
    
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
