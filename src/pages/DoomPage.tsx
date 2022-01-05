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
                <div className="center-align">
                    1. Click the bottom-most button on the 
                    game's menu bar to fullscreen the app 
                    (if desired).
                    <br />
                    <br />
                    2. Click the mouse pointer button and 
                    select the SECOND option. This enables 
                    mouse-focus and is required for the 
                    controls to work properly.
                    <br />
                    <br />
                    3. Click the left caret (the little tab) 
                    to hide the menu bar.
                    <br />
                    <br />
                    4. Click the main window one time and the 
                    app will capture your mouse.
                    <br />
                    <br />
                    5. Press ESC at anytime to exit fullscreen
                    and regain control of the mouse.
                    <br />
                    <br />
                    6. Navigate through the game menu using the
                    arrow keys and Enter.
                    <br />
                    <br />
                    7. Rip and tear, you introvert you...
                </div>
            </div>
        </main>
    )
}

export default DoomPage