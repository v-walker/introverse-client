
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
                brand={<Link to="/recommendations" className="mt-2" id="top"><img src="img/header-logo.png" width={80} /></Link>}
                id="mobile-nav"
                menuIcon={<GiHamburgerMenu  style={{fontSize: "2rem", margin: "16px"}} />}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    outDuration: 200,
                    preventScrolling: true
                }}
                sidenav={<>
                            {/* <SideNavItem href="/">Home</SideNavItem>
                            <SideNavItem href="/quiz">Quiz</SideNavItem> */}
                            <SideNavItem href="/recommendations">YOUR INTROVERSE</SideNavItem>
                            <SideNavItem href="/about">ABOUT</SideNavItem>
                            <button style={{width: "100%"}} className="left-align" onClick={() => onLogOut()}><SideNavItem href="/">LOGOUT</SideNavItem></button>
                        </>}
                >
                {/* <Link to="/">
                    <b>HOME</b>
                </Link>
                <Link to="/quiz">
                    <b>OUIZ</b>
                </Link> */}
                <Link to="/recommendations">
                    <b>YOUR INTROVERSE</b>
                </Link>
                <Link to="/about">
                    <b>ABOUT</b>
                </Link>
                <Link onClick={() => onLogOut()} to="/">
                    <b>LOGOUT</b>
                </Link>
                
            </Navbar>
        </>
        
    )
}

export default Header;