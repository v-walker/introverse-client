import React from "react";

interface MarkerProps extends google.maps.MarkerOptions {
    onClick?: (e: google.maps.MapMouseEvent) => void;
};

const Marker: React.FC<MarkerProps> = ({onClick, ...options}) => {
    const [marker, setMarker] = React.useState<google.maps.Marker>();

    React.useEffect(() => {
    if (!marker) {
        setMarker(new google.maps.Marker());
    };

    // remove marker from map on unmount
    return () => {
        if (marker) {
        marker.setMap(null);
        }
    };
    }, [marker]);

    React.useEffect(() => {
    if (marker) {
        marker.setOptions(options);
    }

    if (marker && onClick) {
        marker.addListener("click", onClick);
    }

    }, [marker, options, onClick]);

    return null;
};


export default Marker;