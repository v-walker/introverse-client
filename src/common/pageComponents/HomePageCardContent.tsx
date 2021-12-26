import React from 'react';
import SignUpForm from './SignUpForm';

function HomePageCardContent() {
    return (
        <>
            <div className="row">
                <div className="col s12 m8 l8 center-align">
                <h1>Introverse</h1>
                <h6>Avoiding others, together</h6>
                
                </div>
                <div className="col s12 m4 l4">
                <SignUpForm />
                

                </div>
            </div>
        </>
    )
}

export default HomePageCardContent;
