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

                            <CollapsibleItem icon={<>&nbsp;<GiDirectionSigns />&nbsp;</>} expanded={false} header="New here or looking for a refresher? Click here to view instructions on how to use this map." node="div">
                                This page is where you will find the main functionality of this application. 
                                <br /><br />
                                <b>To find a location type</b>, select a place type from the drop-down menu under "Select Place Type" on the left-hand side in your browser or directly under your Intro-Safe shield on mobile view. Then press "search". Your map will populate markers for your sign-up location or the last locaiton you searched. 
                                <br /><br />
                                <b>To change your map search area</b>, you can either input a search location under "Change Search Location," then press the "search button." This input takes in a city name or zip code. Alternatively, you can pan to a new location on the map, then click or tap the map before pressing the  "set new map center" button above the map. Your place search will update with the new location selected.
                                <br /><br />
                                <b>To view details about a selected business or point of interest</b>, click on a map marker to view the title of the business/point of interest and the address. You will also see a link to "see times recommendations." You can either click this link or scroll down on the page to see your times recommendations chart for this location. Various popular times data is available for each day of the week. If there is no data available for this location, you will see "no data" in the chart section. If data is available, but you do not see anything on the chart, that location appears to be closed at that time/day. Try selecting another day of the week. 
                                <br /><br />
                                <b>To view more or less of the map</b>, use the "+" and "-" buttons on the bottom right-hand corner of the map to zoom in or out on your centered search area. 
                                <br /><br />
                                <b>What if I don't see any markers on the map?</b>, try zooming out. Your search type may be further away from your centered location than the map default zoom ratio. You can also try panning around your centered location. If there are no locations available in the "Map Locations List," we were unable to find any locations matching your search type for your selected map area.

                            </CollapsibleItem>
                            <CollapsibleItem icon={<>&nbsp;<FaQuestion />&nbsp;</>} expanded={false} header="What does my introvert rating mean and how do I use it?" node="div">
                                Instructions here
                            </CollapsibleItem>
                            <CollapsibleItem icon={<>&nbsp;<IoRocketSharp />&nbsp;</>} expanded={false} header="What if I would like to visit Mars?" node="div">
                                Astronaut Mark Watney asks for your patience. This feature is not yet available.
                            </CollapsibleItem>

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
