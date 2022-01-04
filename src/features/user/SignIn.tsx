
import React, {useEffect,FormEvent,useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState, PayloadUserLoginInfo, } from './userSlice';
import { useNavigate } from 'react-router-dom';


const SignIn = ({}) => {
    
const dispatch = useDispatch();
const navigate = useNavigate();

// const { handleSubmit } = useForm();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const { isSuccess, isError, errorMessage } = useSelector( userSelector);

// useEffect(() => { 
//     dispatch(fetchUserBytoken());
// }, []);



useEffect(() => {
    if (isError) {
    console.log('use effect errorMessage',errorMessage);
    dispatch(clearState());
    navigate('/');
}
}, [isError]);

const handleSignIn = (e: FormEvent, userInfo: PayloadUserLoginInfo) => {
    e.preventDefault();

    dispatch(loginUser(userInfo))
}

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
    console.log('success');
    navigate('/recommendations');
}
}, [isError, isSuccess]);

return (
<>
    <h5>Sign In</h5>
    <form onSubmit={(e) => handleSignIn(e, {email, password})} className='col s12'>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="validate"
                    onChange={(e) => setEmail(e.target.value)}/>
                    
        </div>
        
        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
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