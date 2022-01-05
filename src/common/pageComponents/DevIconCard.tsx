import React from 'react'

interface DevIconCardProps {
    IconElement: JSX.Element;
    techName: string
}

function DevIconCard({IconElement, techName}: DevIconCardProps): JSX.Element {
    return (
        <>
            <div className='col s4 m3 l2 mb-5 center-align'>
                {IconElement}
                <br />
                <p className='fs2'>{techName}</p>
            </div>
        </>
    )
}

export default DevIconCard
