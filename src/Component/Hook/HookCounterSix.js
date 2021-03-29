import React, { useEffect, useState } from 'react'
// conditionally use useEffect
function HookCounterSix(){
const[count, setCount]=useState(0);
const[name,setName] =useState('');

useEffect(()=>{
    console.log("useEffect updating the console")
    document.title=count
},[count])
    return(
        <div>
            <input type="text" value ={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={e=>setCount(count+1)}>You clicked {count}</button>
        </div>
    )
}

export default HookCounterSix;