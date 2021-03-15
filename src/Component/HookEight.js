import React, { useState } from 'react'
import HookSeven from './HookSeven';

function HookEight(){
    const[display, setDisplay]=useState(true);


    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>ToggleMe</button>    
            {display && <HookSeven/>}
        </div>
    )
}

export default HookEight;