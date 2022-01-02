import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

/** icons */
import { MdSearch } from 'react-icons/md';

/** local components */
import BasicLargeCard from '../common/pageComponents/BasicLargeCard';
import LocationsListContent from '../common/pageComponents/LocationsListContent';
import MapCardContent from '../common/pageComponents/MapCardContent';
import { useAppDispatch } from '../app/hooks';
import { searchCity } from '../features/map/mapSlice';


function RecommendationsPage() {
    const dispatch = useAppDispatch();

    const [userCitySearch, setUserCitySearch] = useState("");

    /**
     * function handleSearchSubmit() handles form submission of location search, dispatching the search string to global state and resetting the form input to an empty string ("") 
     * 
     * @param e: FormEvent
     * @returns void
     */

    const handleSearchSubmit = (e: FormEvent): void => {
        e.preventDefault();

        dispatch(searchCity(userCitySearch));

        setUserCitySearch("");
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
                    <div className='col s12 m9 mt-5'>
                        <BasicLargeCard cardContent={<MapCardContent />} />
                    </div>
                    <div className="center-align">
                        <Link to="/itrunsdoom">
                            <span className="doomFontLeftSmall">I</span>
                            <span className="doomFontStdSmall">'m feeling luck</span>
                            <span className="doomFontRightSmall">Y</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default RecommendationsPage;
