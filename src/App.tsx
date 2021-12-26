import React from 'react';

import BasicLargeCard from './common/pageComponents/BasicLargeCard';

/**
 * Landing page/entry point for app
 */

let mainCardContent = 
<>
  <div className="row">
    <div className="col s12 m8 l8 center-align">
      <h1>Introverse</h1>
      <h6>Avoiding others, together</h6>
      
    </div>
    <div className="col s12 m4 l4">
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
        <div className='input-field'>
          <input id="homeState" type="text" />
          <label htmlFor="homeState">State</label>
        </div>
        <div className="input-field">
          <input id="password" type="password" />
          <label htmlFor="password">Password</label>
        </div>
      </form>

    </div>
  </div>
</>

function App(): JSX.Element {
  return (
    <>
      <main className='container mt-5'>
        <div className="row">
          <div className='col s12'>
            <BasicLargeCard cardContent={mainCardContent}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
