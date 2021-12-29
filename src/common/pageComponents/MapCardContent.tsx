import React from 'react';
import Map from '../../features/map/Map';
import Marker from '../../features/map/Marker';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function MapCardContent(): JSX.Element {
    const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = React.useState(3); // initial zoom
    const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
        lat: 0,
        lng: 0,
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
    
    return (
        <div className='map-card'>
            {/* <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true}> </Map> */}
            <Wrapper apiKey={`${process.env.REACT_APP_GMAPS_KEY}`} render={render}>
                <Map center={center} zoom={zoom} onClick={onClick} onIdle={onIdle} style={{ flexGrow: "1", height: "100%" }}>
                    {clicks.map((latLng, i) => (
                        <Marker key={i} position={latLng} />
                    ))}
                </Map>
            </Wrapper>
        </div>
    )
}

export default MapCardContent;
