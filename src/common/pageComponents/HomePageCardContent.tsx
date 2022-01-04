import React, { FormEvent, useState } from 'react';
// import { IoPlanet } from "react-icons/io5"
import SignUp from '../../features/user/SignUp';
import SignIn from '../../features/user/SignIn';



function HomePageCardContent(): JSX.Element {

    const [isSignIn, setIsSignIn] = useState(false);

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
                    {isSignIn?
                    <SignIn/>
                    :
                    <SignUp/>
                    }

                    {isSignIn?
                    <div className='col s12 mt-5'>
                    Dont have an account?
                    <br />
                    {/* add links to this line */}
                    Click here to <button className='waves-effect waves-light btn-small btn-flat btn-signin' onClick={() => setIsSignIn(!isSignIn)}>Sign Up</button>.
                    </div>
                    :
                    <div className='col s12 mt-5'>
                    Already have an account?
                    <br />
                    {/* add links to this line */}
                    Click here to <button className='waves-effect waves-light btn-small btn-flat btn-signin' onClick={() => setIsSignIn(!isSignIn)}>Sign in</button>
                    </div>
                    }
                    

                    


                    
                </div>
            </div>
        </>
    )
}

export default HomePageCardContent;
