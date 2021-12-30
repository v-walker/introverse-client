import React from 'react'
import DosPlayer from "../common/pageComponents/DosPlayer";

function DoomPage() {
    return (
    <div className="App" style={{ width: "1024px", height: "768px" }}>
        <DosPlayer bundleUrl="DOOM.jsdos" />
    </div>
    )
}

export default DoomPage