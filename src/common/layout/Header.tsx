import { Link } from 'react-router-dom';
import { Navbar, Icon, SideNavItem } from 'react-materialize'

// icons
import { GiHamburgerMenu } from 'react-icons/gi'


function Header():JSX.Element {
    
    // useEffect(() => {
    //     console.log(indivScore)
    // }, [indivScore])
    
    return (
        <>
            <Navbar
                className='orange lighten-2'
                alignLinks="right"
                brand={<Link to="/" className="">Logo</Link>}
                id="mobile-nav"
                menuIcon={<GiHamburgerMenu style={{fontSize: "1.5rem"}} />}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    outDuration: 200,
                    preventScrolling: true
                }}
                sidenav={<>
                            <SideNavItem href="/">Home</SideNavItem>
                            <SideNavItem href="/quiz">Quiz</SideNavItem>
                            <SideNavItem href="/recommendations">Recommendations</SideNavItem>
                            <SideNavItem href="/about">About</SideNavItem>
                        </>}
                >
                <Link to="/">
                    Home
                </Link>
                <Link to="/quiz">
                    Quiz
                </Link>
                <Link to="/recommendations">
                    Recommendations
                </Link>
                <Link to="/about">
                    About
                </Link>
            </Navbar>
            


            {/* <nav>
                <div className='container'>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Logo</Link>
                        <button data-target="slide-out" className="sidenav-trigger right hide-on-large-only">=</button>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/quiz">Quiz</Link></li>
                            <li><Link to="/recommendations">Recommendations</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul id="slide-out" className="sidenav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quiz">Quiz</Link></li>
                <li><Link to="/recommendations">Recommendations</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul> */}
        </>
        
    )
}

export default Header;