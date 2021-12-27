import React from 'react';

/** icons */
import { MdSearch } from 'react-icons/md';

/** local components */
import BasicLargeCard from '../common/pageComponents/BasicLargeCard';
import LocationsListContent from '../common/pageComponents/LocationsListContent';
import MapCardContent from '../common/pageComponents/MapCardContent';


function RecommendationsPage() {
    return (
        <>
            <main className='container mt-5'>
                <div className='row'>

                    <div className='col s12 center-align'>
                        <h1>Your Recommendations</h1>

                    </div>

                    <aside className='col s12 m3 mt-5'>
                        {/* search section */}
                        <h4>Search Location</h4>
                        <form>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id="locationSearch" type="search" />
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

                </div>
            </main>
        </>
    )
}

export default RecommendationsPage
