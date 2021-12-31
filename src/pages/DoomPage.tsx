import React from 'react'
import DosPlayer from "../common/pageComponents/DosPlayer";

function DoomPage(): JSX.Element {
    return (
        <main className='container'>
            <div className="row m-below-nav">
                <div className='col s12 centerHoriz'>
                    {/* <div>
                        <h1 className='center-align mt-1'>WELCOME TO...</h1>
                    </div> */}
                    <div style={{ width: "960px", height: "600px" }}>
                        <DosPlayer bundleUrl="DOOM.jsdos" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DoomPage