import React from 'react';
import SignUpForm from './SignUpForm';
import { IoPlanet } from "react-icons/io5"

function HomePageCardContent(): JSX.Element {
    return (
        <>
            <div className="row">
                <div className="col s12 m8 l8 center-align">
                <h1>Introverse</h1>
                <h6>avoiding everyone, together</h6>

                {/* add icon or logo/image here */}
                <div className='row main-icon-container'>
                    <div className='col s12 main-icon-parent'>
                        <IoPlanet className='xl-icon' />
                    </div>
                </div>
                
                </div>
                <div className="col s12 m4 l4">
                    <SignUpForm />
                </div>
            </div>
        </>
    )
}

export default HomePageCardContent;
