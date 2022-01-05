import React from 'react';
import BasicLargeCard from '../common/pageComponents/BasicLargeCard';
import AboutMainCardContent from '../common/pageComponents/AboutMainCardContent';
import DevColumn from '../common/pageComponents/DevColumn';
import DevIconCard from '../common/pageComponents/DevIconCard';

function AboutPage(): JSX.Element {
    return (
        <>
            <main className='container'>
                <div className='row m-below-nav'>
                    <div className='col s12'>
                        <BasicLargeCard cardContent={<AboutMainCardContent />} />
                    </div>

                    <div className='col s12'>
                        <div className='row'>
                            {/* Tech Stack Section */}
                            <h2 className='col s12 center-align'>Technical Stack</h2>
                            <hr />
                            {/* Icons here */}
                            <div className='col s12 row'>
                                <DevIconCard />
                            </div>
                        </div>
                    </div>

                    <div className='col s12'>
                        <div className='row'>
                            <h2 className='center-align'>Our Team</h2>
                            <hr />

                            {/* dev cards here */}
                            <div className='col s12'>
                                <div className='row'>
                                    <DevColumn imagePath="../../img/anon.png" name="Andrew Hatch" link="https://github.com/AMHatch"/>
                                    <DevColumn imagePath="../../img/anon.png" name="Hunter Hutchisson" link="https://github.com/hunterhutchisson"/>
                                    <DevColumn imagePath="../../img/anon.png" name="Ryan Donald" link="https://github.com/ryanthomasdonald"/>
                                    <DevColumn imagePath="../../img/anon.png" name="Victoria Walker" link="https://github.com/v-walker"/>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default AboutPage;
