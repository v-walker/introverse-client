import React, { useState, useEffect,FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { userSignUp, userSelector, clearState ,PayloadUserInfo } from './userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {statesArray} from '/utils'


const SignUp = () => {
const dispatch = useDispatch();

const [email, setEmail] = useState("");
const [homeCity, setHomeCity] = useState("");
const [homeState, setHomeState] = useState("");
const [password, setPassword] = useState("");
const [isSignIn, setIsSignIn] = useState(false);



const { register, errors, handleSubmit } = useForm();
const navigate = useNavigate();
const { isFetching, isSuccess, isError, errorMessage } = useSelector(userSelector);

const handleSignUp = (e: FormEvent, userInfo: PayloadUserInfo) => {
    e.preventDefault();
    dispatch(userSignUp())
}

useEffect(() => {
return () => {
    dispatch(clearState());
};
}, []);

useEffect(() => {
if (isSuccess) {
    dispatch(clearState());
    navigate('/');
}
if (isError) {
    toast.error(errorMessage);
    dispatch(clearState());
}
}, [isSuccess, isError]);


return (
    <>
    {!isSignIn? <h5>Sign Up</h5> : <h5>Sign In</h5>}
    <form onSubmit={(e) => handleSignUp(e, {email, homeCity, homeState, password})} className='col s12'>
        <div className="input-field">
            <input id="email" type="text" className="validate" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="email">Email</label>
        </div>
        {!isSignIn && 
        <>
            <div className='input-field'>
                <input id="homeCity" type="text" onChange={(e) => setHomeCity(e.target.value)} />
                <label htmlFor="homeCity">Home City</label>
            </div>

            <div className='input-field'>
            <label htmlFor="homeState" className='select-label'>Select a State</label>
            <select id="homeState" className='browser-default' defaultValue="" onChange={(e) => setHomeState(e.target.value)}>
                <option value="" disabled>State</option>
                {statesArray.map((stateString, index) => {
                    return <option key={index} value={stateString}>{stateString}</option>
                })}
            </select>
            </div>
        </>
        }
        
        <div className="input-field">
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password">Password</label>
        </div>
        <div className='right-align'>
            <button type='submit' className='waves-effect waves-light btn'>Submit</button>
        </div>
    </form>

    {!isSignIn && 
        <div className='col s12 mt-5'>
        Already have an account?
        <br />
        {/* add links to this line */}
        Click here to <button className='waves-effect waves-light btn-small btn-flat btn-signin' onClick={() => setIsSignIn(!isSignIn)}>sign in</button>.
        </div>
    }
</>




);
};
export default SignUp;