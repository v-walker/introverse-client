import React from 'react';

interface FeatureElements {
    IconElement: JSX.Element,
    text: string
}

function FeatureColumn({IconElement, text}: FeatureElements) {
    return (
        <div className='col s12 m4'>
            <div className="row mt-5">
                <div className='col s12'>
                {/* icon here */}
                {IconElement}
                </div>
                <div className='col s12'>
                {/* text here */}
                <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureColumn;
