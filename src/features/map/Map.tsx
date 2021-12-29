import React from 'react';

interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

const Map: React.FC<IMap> = ({mapType, mapTypeControl = false}) => {
    return (
        <div>
            Map component
        </div>
    )
}

export default Map;