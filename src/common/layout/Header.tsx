import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Link to="/">Home Page</Link>
            &nbsp;
            <Link to="/quiz">Quiz</Link>
            &nbsp;
            <Link to="/recommendations">Recommendations</Link>
            &nbsp;
            <Link to="/about">About</Link>
        </>
    )
}

export default Header;