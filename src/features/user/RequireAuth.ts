import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const RequireAuth =(props:any) =>{
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('token')){
            console.log('sign in redirect')
            navigate('/')
        }
    }, [])
    return props.children
}

//<RequireAuth>  here is the component we want to protect </RequireAuth>

export default RequireAuth