import React, {useState, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addName, removeName, selectNames } from './testFeatureSlice';

function TestFeature() {
    const names = useAppSelector(selectNames);
    const dispatch = useAppDispatch();
    const [nameToAdd, setNameToAdd] = useState("")

    const handleSubmitName = (event: FormEvent) => {
        event.preventDefault();

        dispatch(addName(nameToAdd));
        setNameToAdd("");
    }
    
    return (
        <div className='col s12 center-align'>
            <h1>Add a Name!</h1>
            <br />
            <form className='left-align' onSubmit={handleSubmitName}>
                <label htmlFor="name-input">Name</label>
                <input id="name-input" value={nameToAdd} placeholder="Name" type="text" onChange={(e) => setNameToAdd(e.target.value)} />
                <input className='waves-effect waves-light btn teal' type="submit" />
            </form>
            
            <br />
            <br />
            <h2>Names You Have Added:</h2>
            <div className='left-align'>
                <ul>
                    {names.map(name => {
                        return(
                            <>
                                <li><button className='waves-effect waves-light btn red' onClick={() => dispatch(removeName(name))}><b>X</b></button> &nbsp;{name}</li>
                                <br />
                            </>
                            
                        ) 
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TestFeature
