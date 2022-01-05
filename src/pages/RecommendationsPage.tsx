/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleItem } from 'react-materialize';

/** icons */
import { MdSearch } from 'react-icons/md';
import { GiDirectionSigns } from 'react-icons/gi';
import { FaQuestion } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';

/** local components */
import BasicLargeCard from '../common/pageComponents/BasicLargeCard';
import LocationsListContent from '../common/pageComponents/LocationsListContent';
import MapCardContent from '../common/pageComponents/MapCardContent';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateCurrentLocation, searchCity, selectRecentClick, updateCurrentMapCenter, updatePlaceSearchType, selectPlaceSearchType, updateSelectedPlace, updatePopTimesData, selectSelectedPlace} from '../features/map/mapSlice';
import { selectIntrovertRating } from '../features/user/userSlice';
import TimesTabs from "../features/map/TimesTabs";
import { getGeoInfo, placeTypesArray } from '../common/utils';


function RecommendationsPage() {
    const dispatch = useAppDispatch();
    const selectedPlaceSearchType = useAppSelector(selectPlaceSearchType);
    const introvertRating = useAppSelector(selectIntrovertRating);
    const [userCitySearch, setUserCitySearch] = useState("");
    const [placeTypeSearch, setPlaceTypeSearch] = useState(selectedPlaceSearchType || "");
    const recentClick = useAppSelector(selectRecentClick);
    const selectedPlace = useAppSelector(selectSelectedPlace);

    useEffect(() => {

    // run cleanup when component unmounts
    return () => {
        dispatch(updatePlaceSearchType(""));
        dispatch(searchCity(""));
        dispatch(updateSelectedPlace(null));
        dispatch(updatePopTimesData(null));
    }
    }, []);

    /**
     * handlePlaceTypeSubmit() handles form submission of place type search, dispatching the seaarch string to the global state, then resetting the form input to an empty string
     * 
     * @param e 
     * @returns void
     */

    const handlePlaceTypeSubmit = (e: FormEvent): void => {
        e.preventDefault();

        dispatch(updatePlaceSearchType(placeTypeSearch));
    }

    /**
     * function handleSearchSubmit() handles form submission of location search, dispatching the search string to global state and resetting the form input to an empty string ("") 
     * 
     * @param e: FormEvent
     * @returns void
     */

    const handleCitySearchSubmit = (e: FormEvent): void => {
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
        dispatch(updateCurrentLocation(recentClick));
        dispatch(updateCurrentMapCenter(recentClick));
    }

    return (
        <>
            <main className='container'>
                <div className='row m-below-nav'>

                    <div className='col s12 center-align'>
                        <h1>Your Introverse</h1>
                        <hr />
                    </div>

                    <div className='col s12 center-align'>

                        <Collapsible accordion popout>

                            <CollapsibleItem icon={<>&nbsp;<GiDirectionSigns />&nbsp;</>} expanded={false} header="New here or looking for a refresher? Click here to view instructions on how to use this map." node="div">Instructions here</CollapsibleItem>
                            <CollapsibleItem icon={<>&nbsp;<FaQuestion />&nbsp;</>} expanded={false} header="What does my introvert rating mean and how do I use it?" node="div">Instructions here</CollapsibleItem>
                            <CollapsibleItem icon={<>&nbsp;<IoRocketSharp />&nbsp;</>} expanded={false} header="What if I would like to visit Mars?" node="div">Astronaut Mark Watney asks for your patience. This feature is not yet available.</CollapsibleItem>

                        </Collapsible>

                    </div>

                    <aside className='col s12 m3 mt-5'>
                        {/* search section */}

                        <div className='center-align'>
                            {(introvertRating <= 20) && <img width='120px' src='../img/shield-low.png' alt="introvert rating - green shield displaying the text 'low'"/>}
                            {(introvertRating > 20 && introvertRating <= 30) && <img width='120px' src='../img/shield-medium.png' alt="introvert rating - yellow-orange shield displaying the text 'medium'"/>}
                            {(introvertRating >= 31) && <img width='120px' src='../img/shield-high.png' alt="introvert rating - red shield displaying the text 'high'"/>}

                        </div>

                        {/* Places query form */}
                        <h6>Select Place Type</h6>
                        <form onSubmit={(e) => handlePlaceTypeSubmit(e)}>
                            <div className='row'>
                                {/* <label htmlFor="placeTypeSearch">Select a Place Type</label> */}
                                <br />
                                <select required id="placeTypeSearch" className='browser-default' defaultValue={selectedPlaceSearchType || "place"} onChange={(e) => setPlaceTypeSearch(e.target.value)} >
                                    <option value="place" disabled>place</option>
                                    {placeTypesArray.map((placeTypeObj, index) => {
                                        return <option key={index} value={placeTypeObj.value}>{placeTypeObj.displayName}</option>
                                    })}
                                    <option value="" disabled>Mars</option>
                                </select>
                                <br />
                                <div className='right-align col s12'>
                                    <button type='submit' className='waves-effect waves-light btn'>Search&nbsp;<MdSearch /></button>
                                </div>
                            </div>
                        </form>

                        {/* Location change form */}
                        <h6>Change Search Location</h6>
                        <form onSubmit={(e) => handleCitySearchSubmit(e)}>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input required id="locationSearch" type="search" value={userCitySearch} onChange={(e) => setUserCitySearch(e.target.value)} />
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
                        <button className="mt-5 btn waves-effect waves-light" onClick={() => handleRecenterButton()}>set new map center</button>
                    </div>

                    <div className='col s12 m9'>
                        <BasicLargeCard cardContent={<MapCardContent />} />
                        <a className='hidden-point' id="scroll-to-point">Hidden anchor point</a>
                    </div>
                    
                    {selectedPlace && <>
                        
                        <div className="row">
                            <div className='col s12 center-align'>
                                <h2>Popular Times Data for Chosen Location</h2>
                            </div>

                            <div className="col s12">
                                <TimesTabs />
                            </div>
                        </div>

                    </>}

                    <div className="row">
                        <div className="col s12 center-align">
                            <Link to="/itrunsdoom">
                                <span className="doomFontLeftMed">I</span>
                                <span className="doomFontStdMed">'m staying i</span>
                                <span className="doomFontRightMed">N</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default RecommendationsPage;
