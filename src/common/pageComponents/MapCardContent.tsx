import React from 'react';
import Map from '../../features/map/Map';

function MapCardContent(): JSX.Element {
    return (
        <div className='map-card'>
            <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true}> </Map>
        </div>
    )
}

export default MapCardContent;
