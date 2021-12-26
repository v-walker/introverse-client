import React from 'react';
import '../../index.css'

function BasicLargeCard({cardContent}: any): JSX.Element {
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
