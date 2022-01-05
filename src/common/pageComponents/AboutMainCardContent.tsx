import React from 'react';

function AboutMainCardContent(): JSX.Element {
    return (
        <div>
            <h1 className='center-align'>About The IntroVERSE</h1>
            <hr />
            <div className='row'>
                <div className='col s12 m8'>
                    <p className="mt-5">IntroVERSE is a full-stack web application created BY introverts FOR introverts. Our goal was to create a clean user interface in which introverts can anonymously view local points of interest and determine the best time to visit said location without overwhelming their systems. We sought to make an extroverted world accessible to introverts, ambiverts, and everyone in-between.</p>
                    <br />
                    <p>Need to get groceries, but want to go at the least popular time? We've got your back. How about visiting a dog park? Check out our interactive map to plan your outing with Man's Best Friend (perhaps the only one you need!). Our patented IntroSAFE quiz and ratings help us to make better suggestions for you based on your level of introversion.</p>
                </div>
                <div className="col s12 m4">
                    <div className='mt-5 center-align'>
                        <img src='../../img/fun.png' alt='stick figure with bag over head playing fetch with dog' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMainCardContent;
