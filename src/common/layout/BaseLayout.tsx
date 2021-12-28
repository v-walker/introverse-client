import Header from './Header';
import Footer from './Footer'

interface ChildrenProps {
    children?: React.ReactNode;
}


function BaseLayout({children}: ChildrenProps) {
    return (
        <>
            <Header />
            <br />
            {children}
            <br />
            <Footer />
        </>
    )
}

export default BaseLayout;