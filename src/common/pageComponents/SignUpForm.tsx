import React from 'react';

function SignUpForm(): JSX.Element {
    return (
        <>
            <h5>Sign Up</h5>
            <form className='col s12'>
                <div className="input-field">
                    <input id="email" type="text" className="validate" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className='input-field'>
                    <input id="homeCity" type="text" />
                    <label htmlFor="homeCity">Home City</label>
                </div>
                {/* need to make this a drop-down instead of input */}
                <div className='input-field'>
                    <input id="homeState" type="text" />
                    <label htmlFor="homeState">State</label>
                </div>
                <div className="input-field">
                    <input id="password" type="password" />
                    <label htmlFor="password">Password</label>
                </div>
                <div className='right-align'>
                    <button type='submit' className='waves-effect waves-light btn'>Submit</button>
                </div>
            </form>

            <div className='col s12 mt-5'>
                Already have an account?
                <br />
                Click here to sign in.
            </div>
        </>
    )
}

export default SignUpForm;
