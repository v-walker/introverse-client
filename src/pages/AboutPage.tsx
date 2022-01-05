import React from 'react';
import BasicLargeCard from '../common/pageComponents/BasicLargeCard';
import AboutMainCardContent from '../common/pageComponents/AboutMainCardContent';
import DevColumn from '../common/pageComponents/DevColumn';
import DevIconCard from '../common/pageComponents/DevIconCard';

//icons
import { SiReact, SiTypescript, SiNodedotjs, SiRedux, SiPostgresql, SiExpress, SiSequelize, SiCss3, SiGoogle, SiJsonwebtokens } from 'react-icons/si';
import { DiMaterializecss } from 'react-icons/di';
import { MdOutlineAreaChart } from 'react-icons/md';
import { GrDos } from 'react-icons/gr'

function AboutPage(): JSX.Element {
    return (
        <>
            <main className='container'>
                <div className='row m-below-nav'>
                    <div className='col s12'>
                        <BasicLargeCard cardContent={<AboutMainCardContent />} />
                    </div>

                    <div className='col s12'>
                        <div className='row'>
                            {/* Tech Stack Section */}
                            <h2 className='col s12 center-align'>Technical Stack</h2>
                            <hr />
                            {/* Icons here */}
                            <div className='col s12 row center-align mt-5'>
                                <DevIconCard IconElement={<SiTypescript className='md-icon text-orange' />} techName='TypeScript'/>
                                <DevIconCard IconElement={<SiNodedotjs className='md-icon text-orange' />} techName='Node.js'/>
                                <DevIconCard IconElement={<SiReact className='md-icon text-orange' />} techName='React'/>
                                <DevIconCard IconElement={<SiRedux className='md-icon text-orange' />} techName='Redux'/>
                                <DevIconCard IconElement={<SiPostgresql className='md-icon text-orange' />} techName='PostgreSQL'/>
                                <DevIconCard IconElement={<SiExpress className='md-icon text-orange' />} techName='Express.js'/>
                                <DevIconCard IconElement={<SiSequelize className='md-icon text-orange' />} techName='Sequelize.js'/>
                                <DevIconCard IconElement={<SiCss3 className='md-icon text-orange' />} techName='CSS'/>
                                <DevIconCard IconElement={<DiMaterializecss className='md-icon text-orange' />} techName='Materialize CSS'/>
                                <DevIconCard IconElement={<SiGoogle className='md-icon text-orange' />} techName='Google Cloud APIs'/>
                                <DevIconCard IconElement={<MdOutlineAreaChart className='md-icon text-orange' />} techName='Chart.js'/>
                                <DevIconCard IconElement={<SiJsonwebtokens className='md-icon text-orange' />} techName='JSON Web Tokens'/>
                                <DevIconCard IconElement={<GrDos className='md-icon text-orange' />} techName='JS-DOS'/>
                            </div>
                        </div>
                    </div>

                    <div className='col s12'>
                        <div className='row'>
                            <h2 className='center-align'>Our Team</h2>
                            <hr />

                            {/* dev cards here */}
                            <div className='col s12'>
                                <div className='row'>
                                    <DevColumn imagePath="../../img/anon.png" name="Andrew Hatch" link="https://github.com/AMHatch"/>
                                    <DevColumn imagePath="../../img/anon.png" name="Hunter Hutchisson" link="https://github.com/hunterhutchisson"/>
                                    <DevColumn imagePath="../../img/anon.png" name="Ryan Donald" link="https://github.com/ryanthomasdonald"/>
                                    <DevColumn imagePath="../../img/anon.png" name="Victoria Walker" link="https://github.com/v-walker"/>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default AboutPage;
