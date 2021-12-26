import React from 'react';

import BasicLargeCard from './common/pageComponents/BasicLargeCard';
import HomePageCardContent from './common/pageComponents/HomePageCardContent';

/**
 * Landing page/entry point for app
 */

function App(): JSX.Element {
  return (
    <>
      <main className='container mt-5'>
        <div className="row">
          <div className='col s12'>
            <BasicLargeCard cardContent={<HomePageCardContent/>}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
