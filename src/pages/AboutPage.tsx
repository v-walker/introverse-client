import React from 'react';
import BasicLargeCard from '../common/pageComponents/BasicLargeCard';
import AboutMainCardContent from '../common/pageComponents/AboutMainCardContent';

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
                            <h2 className='center-align'>Technical Stack</h2>
                            <hr />
                            Icons here
                        </div>
                    </div>

                    <div className='col s12'>
                        <div className='row'>
                            <h2 className='center-align'>Our Team</h2>
                            <hr />

                            {/* dev cards here */}
                            <div className='col s12'>
                                <div className='row'>
                                    <div>
                                        
                                    </div>

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
