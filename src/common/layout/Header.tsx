import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Link to="/">Home Page</Link>
            &nbsp;
            <Link to="/test_page">Test Page</Link>
        </>
    )
}

export default Header;