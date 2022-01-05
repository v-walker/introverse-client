import React, { FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { userSignUp, PayloadUserInfo } from "./features/user/userSlice"
import 'materialize-css/dist/css/materialize.min.css';

/** Icons */
// import { GiPlanetConquest, GiMoonOrbit } from 'react-icons/gi';
// import { RiSpaceShipFill } from 'react-icons/ri'


/** Local Components */
import BasicLargeCard from './common/pageComponents/BasicLargeCard';
import HomePageCardContent from './common/pageComponents/HomePageCardContent';
// import FeatureColumn from './common/pageComponents/FeatureColumn';


/**
 * Landing page/entry point for app
 */

function App(): JSX.Element {

  return (
    <>
      <main className='container'>
        {/* main card content */}
        <div className="row m-below-nav">
          <div className='col s12'>
            <BasicLargeCard cardContent={<HomePageCardContent/>}/>
          </div>
        </div>

        <div className='row'>
          <div className='col s12 center-align'>
              <h2>The IntroVerse Way</h2>
          </div>

          {/* feature column container */}
          <div className='col s12 center-align'>
            <div className='row'>
            <div className='col s12 m4'>
            <div className="row mt-5">
                <div className='col s12'>
                  <img src="./img/anon.png" width={210} />
                </div>
                <div className='col s12'>
                  <h3>Anonymity</h3>
                </div>
                <div className='col s12'>
                  <p>For introverts, BY INTROVERTS. Here at IntroVerse, your privacy is of the utmost importance. We will never ask you for any information other than where you collect your email and where you lay your head.</p>
                </div>
              </div>
            </div>
            <div className='col s12 m4'>
            <div className="row mt-5">
                <div className='col s12'>
                  <img src="./img/all-shields.png" width={200} />
                </div>
                <div className='col s12'>
                  <h3>Safety</h3>
                </div>
                <div className='col s12'>
                  <p>Our patent-pending IntroSafe™ technology is GUARANTEED to help you avoid large groups of people, plain and simple.</p>
                </div>
              </div>
            </div>
            <div className='col s12 m4'>
            <div className="row mt-5">
                <div className='col s12'>
                  <img src="./img/fun.png" width={208} />
                </div>
                <div className='col s12'>
                  <h3>Fun</h3>
                </div>
                <div className='col s12'>
                  <p>Frankly, you deserve to have it. And we here at the IntroVerse aim to help you find it. Find your comfort zone by registering today!</p>
                </div>
              </div>
            </div>
              {/* <FeatureColumn IconElement={<GiPlanetConquest className='lg-icon text-teal' />} text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit laborum inventore ratione dolor iure accusantium facere unde consequatur quis ipsum debitis veniam sint quod, fuga dolore alias dolorem nam?" /> */}
              {/* <FeatureColumn IconElement={<RiSpaceShipFill className='lg-icon text-orange' />} text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit laborum inventore ratione dolor iure accusantium facere unde consequatur quis ipsum debitis veniam sint quod, fuga dolore alias dolorem nam?" /> */}
              {/* <FeatureColumn IconElement={<GiMoonOrbit className='lg-icon text-teal' />} text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit laborum inventore ratione dolor iure accusantium facere unde consequatur quis ipsum debitis veniam sint quod, fuga dolore alias dolorem nam?" /> */}

            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export default App;
