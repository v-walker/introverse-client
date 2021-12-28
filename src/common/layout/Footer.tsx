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
                    <div>
                        <Link to="/">
                            Home
                        </Link>
                        <br />
                        <Link to="/quiz">
                            Quiz
                        </Link>
                        <br />
                        <Link to="/recommendations">
                            Recommendations
                        </Link>
                        <br />
                        <Link to="/about">
                            About
                        </Link>
                        <br />
                        <br />
                        <a href="#top">Back to Top</a>
                        <br />
                    </div>
                </div>
                
                <div className='col s12 m4 footer-col2'>
                    © Introverse 2021 | All rights reserved
                </div>
                <div className='col s12 m4 footer-col3'>
                    <div>Interested in our Source Code?</div>
                    <br />
                    <a href="https://github.com/v-walker/introverse-client" target="blank">Github <VscGithub /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
