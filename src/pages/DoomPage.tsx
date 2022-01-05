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
                    <div style={{width: "100%"}}>
                        <DosPlayer bundleUrl="DOOM.jsdos" />
                    </div>
                </div>
                <div className="center-align">
                    <span className="doomFontLeft">C</span>
                    <span className="doomFontStd">ontrol</span>
                    <span className="doomFontRight">S</span>
                </div>
                <div className="valign-wrapper">
                    <div className="col s6 right-align">
                        <span className="doomFontLeftSmall">W</span>
                        <span className="doomFontStdSmall">as</span>
                        <span className="doomFontRightSmall">D</span>
                    </div>
                    <div className="col s6 left-align">
                        <span>Forward/Backward/Strafe</span>
                    </div>
                </div>
                <div className="valign-wrapper">
                    <div className="col s6 right-align">
                        <span className="doomFontRightSmall">E</span>
                    </div>
                    <div className="col s6 left-align">
                        <span>Use/Open Door</span>
                    </div>
                </div>
                <div className="valign-wrapper">
                    <div className="col s6 right-align mb-5">
                        <span className="doomFontLeftSmall">M</span>
                        <span className="doomFontStdSmall">ous</span>
                        <span className="doomFontRightSmall">E</span>
                    </div>
                    <div className="col s6 left-align mb-5">
                        <span>Turn Left/Right, Fire (MB 1)</span>
                    </div>
                </div>
                <div className="center-align">
                    <span className="doomFontLeft">Q</span>
                    <span className="doomFontStd">uick star</span>
                    <span className="doomFontRight">T</span>
                </div>
            </div>
        </main>
    )
}

export default DoomPage