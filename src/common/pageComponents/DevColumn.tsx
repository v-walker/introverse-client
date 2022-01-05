import React from 'react';
import { GoLinkExternal } from 'react-icons/go'

interface DevColElements {
    imagePath: string;
    name: string;
    link: string;
}

function DevColumn({imagePath, name, link}: DevColElements): JSX.Element {
    return (
        <div className='col s12 m6 l3'>
            <div className="row mt-5">
                <div className='col s12 center-align'>
                {/* image here */}
                    <img src={imagePath} alt="stick figure with bag over head for anonymity" width={210} />
                </div>
                <div className='col s12 center-align'>
                {/* text here */}
                <p><a href={link} target="_blank" rel="noreferrer">{name}&nbsp;<GoLinkExternal /></a></p>
                </div>
            </div>
        </div>
    )
}

export default DevColumn;