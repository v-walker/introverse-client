import React from 'react';

import BasicLargeCard from './common/pageComponents/basicLargeCard';

/**
 * Landing page/entry point for app
 */

let mainCardContent = 
<>
  <div className="row">
    <div className="col s12 m8 l8 center-align">
      <h1>Introverse</h1>
      <h6>Avoiding others, together</h6>
      <hr />
    </div>
    <div className="col s12 m4 l4">
      <h5>Sign Up</h5>
      

      <h5>Log In</h5>
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
