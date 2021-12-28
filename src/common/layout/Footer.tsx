import React from 'react';
import { Link } from 'react-router-dom';

// icons
import { VscGithub } from 'react-icons/vsc'

function Footer(): JSX.Element {
    return (
        <footer className='pt-5 pb-5'>
            <div className='row container'>
                <div className='col s12 m4 left-align'>
                    <div>Navigation Menu</div>
                    <br />
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
                </div>
                <div className='col s12 m4 center-align'>
                    © Introverse 2021 | All rights reserved
                </div>
                <div className='col s12 m4 right-align'>
                    <div>Interested in our Source Code?</div>
                    <br />
                    <a href="https://github.com/v-walker/introverse-client" target="blank">Github <VscGithub /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
