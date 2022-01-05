import React from 'react';
import '../../index.css'

interface LargeCardElements {
    cardContent: JSX.Element;
}

function BasicLargeCard({cardContent}: LargeCardElements): JSX.Element {
    return (
        <div className="row">
            <div className="col s12 mx0">
                <div className="card-panel">
                    <span>{cardContent}</span>
                </div>
            </div>
        </div>
    )
}

export default BasicLargeCard;
