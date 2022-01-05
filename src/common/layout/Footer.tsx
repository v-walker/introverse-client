import React from 'react';
import { Link } from 'react-router-dom';

// icons
import { VscGithub } from 'react-icons/vsc'

function Footer(): JSX.Element {
    return (
        <footer className='pt-5 pb-5'>
            <div className='row container'>
                <div className='col s12 m4 footer-col1'>
                    <div>Navigation Menu</div>
                    <br />
                    <div className='footer-link-container'>
                        <Link className='waves-effect waves-yellow' to="/">
                            Home
                        </Link>
                        <br />
                        {/* <Link className='waves-effect waves-yellow' to="/quiz">
                            Quiz
                        </Link>
                        <br /> */}
                        <Link className='waves-effect waves-yellow' to="/recommendations">
                            Your Introverse
                        </Link>
                        <br />
                        <Link className='waves-effect waves-yellow' to="/about">
                            About
                        </Link>
                        <br />
                        <br />
                        <a className='waves-effect waves-yellow' href="#top">Back to Top</a>
                        <br />
                    </div>
                </div>
                
                <div className='col s12 m4 footer-col2'>
                    © Introverse 2021 | All rights reserved
                </div>
                <div className='col s12 m4 footer-col3 footer-link-container'>
                    <div>Interested in our Source Code?</div>
                    <br />
                    <a className='waves-effect waves-yellow' href="https://github.com/v-walker/introverse-client" target="blank">Github <VscGithub /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
