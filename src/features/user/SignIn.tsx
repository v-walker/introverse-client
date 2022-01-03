
import React, {useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState, fetchUserBytoken, } from './userSlice';
import { useNavigate } from 'react-router-dom';


const SignIn = ({}) => {
    
const dispatch = useDispatch();
const navigate = useNavigate();
const { handleSubmit } = useForm();
const { isSuccess, isError, errorMessage } = useSelector(
    userSelector
);

useEffect(() => { 
    dispatch(fetchUserBytoken());
}, []);

const { email } = useSelector(userSelector);

useEffect(() => {
    if (isError) {
    console.log(errorMessage);
    dispatch(clearState());
    navigate('/');
}
}, [isError]);


const onSubmit = (data:any) => {
    dispatch(loginUser(data));
};

useEffect(() => {
return () => {
    dispatch(clearState());
};
}, []);


useEffect(() => {
if (isError) {
    console.log(errorMessage);
    dispatch(clearState());
}

if (isSuccess) {
    dispatch(clearState());
    navigate('/');
}
}, [isError, isSuccess]);

return (
<>
    <h5>Sign In</h5>
    <form onSubmit={handleSubmit(()=>onSubmit)} className='col s12'>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="validate"/>
        </div>
        
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                />
        </div>
        
        <div className='right-align'>
            <button type='submit' className='waves-effect waves-light btn'>Submit</button>
        </div>
    </form>
    

</>

);
};

export default SignIn;