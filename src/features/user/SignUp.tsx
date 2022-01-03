
import React, { useState, useEffect,FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSignUp, userSelector, clearState ,PayloadUserInfo } from './userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { statesArray } from '../../common/utils';


const SignUp = () => {
const dispatch = useDispatch();
const [username, setUsername] = useState("")
const [email, setEmail] = useState("");
const [homeCity, setHomeCity] = useState("");
const [homeState, setHomeState] = useState("");
const [password, setPassword] = useState("");





const navigate = useNavigate();
const { isSuccess, isError, errorMessage } = useSelector(userSelector);

const handleSignUp = (e: FormEvent, userInfo: PayloadUserInfo) => {
    e.preventDefault();
    dispatch(userSignUp(userInfo))
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
     <h5>Sign Up</h5>
    <form onSubmit={(e) => handleSignUp(e, {email,username, homeCity, homeState, password})} className='col s12' method="POST">
        <div className="input-field">
            <input id="email" type="text" className="validate" onChange={(e) => setEmail(e.target.value)} autoComplete="email"/>
            <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
            <input id="username" type="text" className="validate" onChange={(e) => setUsername(e.target.value)} autoComplete=""/>
            <label htmlFor="username">Username</label>
        </div>
        
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
        
        
        <div className="input-field">
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"/>
            <label htmlFor="password">Password</label>
        </div>
        <div className='right-align'>
            <button type='submit' className='waves-effect waves-light btn'>Submit</button>
        </div>
    </form>

    
</>




);
};
export default SignUp;