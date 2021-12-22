import Header from './Header';

interface ChildrenProps {
    children?: React.ReactNode;
}


function BaseLayout({children}: ChildrenProps) {
    return (
        <>
            <Header />
            <br />
            {children}
        </>
    )
}

export default BaseLayout;