import React, {useEffect, useState} from 'react';

/** Local Components */
import { selectCurrentLocationQuery } from '../../features/map/mapSlice';
import { useAppSelector } from '../../app/hooks';


function LocationsListContent(): JSX.Element {
    const savedLocationQuery = useAppSelector(selectCurrentLocationQuery);
    const [placesList, setPlacesList] = useState(savedLocationQuery || []);


    useEffect(() => {

        setPlacesList(savedLocationQuery);

    }, [savedLocationQuery])
    
    return (
        <div className='locations-list'>
            <h6>Map Locations List</h6>
            <hr />
            <br />

            {placesList.map((placeObj: google.maps.places.PlaceResult, index: number) => {
                return (
                    <div key={index}>
                        <p><b>{index + 1}.</b>&nbsp;{placeObj.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default LocationsListContent;
