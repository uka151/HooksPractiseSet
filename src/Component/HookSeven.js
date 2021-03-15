import React, { useEffect, useState } from 'react';
//Mouse cordinate
function HookSeven(){
const[x,setX] = useState(0);
const[y,setY] =useState(0);

const logMousePosition=e=>{
console.log("log MousezPosition");
setX(e.clientX);
setY(e.clientY);
}

useEffect(()=>{
    console.log("UseEffect called");
    window.addEventListener('mousemove',logMousePosition)


    return ()=>{
        console.log("Component unmount");
        window.removeEventListener("mousemove",logMousePosition)
    }
},[])

return(
    <div>
        Mouse cordinate X is:{x}, Y is : {y}
    </div>
)
}



export default HookSeven;