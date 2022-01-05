import React, {useState, useEffect} from 'react';

interface InfoWindowProps extends google.maps.InfoWindowOptions {
    
}

const InfoWindow: React.FC<InfoWindowProps> = ({...options}) => {
    const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow>();
    
    useEffect(() => {
        if (!infoWindow) {
            setInfoWindow(new google.maps.InfoWindow());
        };

    }, [infoWindow]);

    useEffect(() => {
        if (infoWindow) {
            infoWindow.setOptions(options)
        }
    }, [infoWindow, options])

    return null;
};

export default InfoWindow;
