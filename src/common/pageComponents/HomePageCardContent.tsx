import React, { FormEvent } from 'react';
import SignUpForm from './SignUpForm';
import { IoPlanet } from "react-icons/io5"

function HomePageCardContent(): JSX.Element {
    return (
        <>
            <div className="row">
                <div className="col s12 m8 l8 center-align">

                {/* add icon or logo/image here */}
                <div className='row main-icon-container'>
                    <div className='col s12 mt-5'>
                        <img src="./img/introVERSE-stacked-yellow.png" width={500} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 mt-5 center-align" >
                        <h5 className="center-align">"Avoiding everyone, together."</h5>
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
