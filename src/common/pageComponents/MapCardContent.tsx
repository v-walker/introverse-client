import React from 'react';
// import Map from '../../features/map/Map';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function MapCardContent(): JSX.Element {
    
    const render = (status: Status) => {
        return <h1>{status}</h1>
    }
    
    return (
        <div className='map-card'>
            {/* <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true}> </Map> */}
            <Wrapper apiKey={`${process.env.REACT_APP_GMAPS_KEY}`} render={render}>
                component here
            </Wrapper>
        </div>
    )
}

export default MapCardContent;
