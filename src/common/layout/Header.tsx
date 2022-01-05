import { Link } from 'react-router-dom';
import { Navbar, SideNavItem } from 'react-materialize';
import { useNavigate } from 'react-router-dom';

// icons
import { GiHamburgerMenu } from 'react-icons/gi'


function Header():JSX.Element {
    
    const navigate = useNavigate()
    const onLogOut = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    // useEffect(() => {
    //     console.log(indivScore)
    // }, [indivScore])
    
    return (
        <>
            <Navbar
                className='teal lighten-2'
                alignLinks="right"
                brand={<Link to="/" className="" id="top">Logo</Link>}
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
                            <button onClick={() => onLogOut()}>Logout</button>
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
                <button onClick={() => onLogOut()}>Logout</button>
            </Navbar>
        </>
        
    )
}

export default Header;