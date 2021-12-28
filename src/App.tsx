import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

/** Icons */
import { GiPlanetConquest, GiMoonOrbit } from 'react-icons/gi';
import { RiSpaceShipFill } from 'react-icons/ri'


/** Local Components */
import BasicLargeCard from './common/pageComponents/BasicLargeCard';
import HomePageCardContent from './common/pageComponents/HomePageCardContent';
import FeatureColumn from './common/pageComponents/FeatureColumn';

/**
 * Landing page/entry point for app
 */

function App(): JSX.Element {
  return (
    <>
      <main className='container mt-5'>
        {/* main card content */}
        <div className="row">
          <div className='col s12'>
            <BasicLargeCard cardContent={<HomePageCardContent/>}/>
          </div>
        </div>

        <div className='row'>
          <div className='col s12 center-align'>
              <h2>The Introverse Way</h2>
          </div>

          {/* feature column container */}
          <div className='col s12 center-align'>
            <div className='row'>

              <FeatureColumn IconElement={<GiPlanetConquest className='lg-icon text-teal' />} text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit laborum inventore ratione dolor iure accusantium facere unde consequatur quis ipsum debitis veniam sint quod, fuga dolore alias dolorem nam?" />
              <FeatureColumn IconElement={<RiSpaceShipFill className='lg-icon text-orange' />} text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit laborum inventore ratione dolor iure accusantium facere unde consequatur quis ipsum debitis veniam sint quod, fuga dolore alias dolorem nam?" />
              <FeatureColumn IconElement={<GiMoonOrbit className='lg-icon text-teal' />} text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit laborum inventore ratione dolor iure accusantium facere unde consequatur quis ipsum debitis veniam sint quod, fuga dolore alias dolorem nam?" />

            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export default App;
