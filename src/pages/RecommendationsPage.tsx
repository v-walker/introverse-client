import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

/** icons */
import { MdSearch } from 'react-icons/md';

/** local components */
import BasicLargeCard from '../common/pageComponents/BasicLargeCard';
import LocationsListContent from '../common/pageComponents/LocationsListContent';
import MapCardContent from '../common/pageComponents/MapCardContent';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateCurrentLocation, searchCity, selectRecentClick, updateCurrentMapCenter } from '../features/map/mapSlice';
import { getGeoInfo } from '../common/utils';


function RecommendationsPage() {
    const dispatch = useAppDispatch();

    const [userCitySearch, setUserCitySearch] = useState("");
    const recentClick = useAppSelector(selectRecentClick);
    

    /**
     * function handleSearchSubmit() handles form submission of location search, dispatching the search string to global state and resetting the form input to an empty string ("") 
     * 
     * @param e: FormEvent
     * @returns void
     */

    const handleSearchSubmit = (e: FormEvent): void => {
        e.preventDefault();

        dispatch(searchCity(userCitySearch));

        if (userCitySearch.includes(",")) {
            let searchArray: string[] = []
            if (userCitySearch.includes(", ")) {
                searchArray = userCitySearch.split(", ");
                let searchedCity = searchArray[0];
                let searchedState = searchArray[1];

                getGeoInfo(searchedCity, searchedState).then(results => {

                    dispatch(updateCurrentLocation({lat: results.results[0].geometry.location.lat, lng: results.results[0].geometry.location.lng}))

                })
            } else {
                searchArray = userCitySearch.split(",");
                let searchedCity = searchArray[0];
                let searchedState = searchArray[1];

                getGeoInfo(searchedCity, searchedState).then(results => {

                    dispatch(updateCurrentLocation({lat: results.results[0].geometry.location.lat, lng: results.results[0].geometry.location.lng}))

                })
            }
        } else {
            getGeoInfo(userCitySearch, "").then(results => {

                dispatch(updateCurrentLocation({lat: results.results[0].geometry.location.lat, lng: results.results[0].geometry.location.lng}))

            })
        }

        setUserCitySearch("");
    }

    const handleRecenterButton = () => {
        dispatch(updateCurrentLocation(recentClick))
        dispatch(updateCurrentMapCenter(recentClick))
    }

    return (
        <>
            <main className='container'>
                <div className='row m-below-nav'>

                    <div className='col s12 center-align'>
                        <h1>Your Recommendations</h1>
                        <hr />

                    </div>

                    <aside className='col s12 m3 mt-5'>
                        {/* search section */}
                        <h5>Search Location</h5>
                        <form onSubmit={(e) => handleSearchSubmit(e)}>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id="locationSearch" type="search" value={userCitySearch} onChange={(e) => setUserCitySearch(e.target.value)} />
                                    <label htmlFor="locationSearch">City, State</label>
                                </div>

                                <div className='right-align col s12'>
                                    <button type='submit' className='waves-effect waves-light btn'>Search&nbsp;<MdSearch /></button>
                                </div>

                            </div>
                        </form>

                        <BasicLargeCard cardContent={<LocationsListContent />} />
                    </aside>


                    {/* map section */}
                    <div className='center-align'>
                        <button className="mt-5" onClick={() => handleRecenterButton()}>set new map center</button>
                    </div>

                    <div className='col s12 m9'>
                        <BasicLargeCard cardContent={<MapCardContent />} />
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <Link to="/itrunsdoom">
                                <span className="doomFontLeftSmall">I</span>
                                <span className="doomFontStdSmall">'m staying i</span>
                                <span className="doomFontRightSmall">N</span>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </main>
        </>
    )
}

export default RecommendationsPage;
