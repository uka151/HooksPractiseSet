import React, { useState } from 'react';

export default function Prestate(){

   // spread operator & how to change value from prev stated 
    let initialvalue=0;
    const[count, setCount]=useState(initialvalue);

 const inCrementbynum=()=>{
    for(let i=0;i<5;i++){
       setCount(prevCount=>prevCount+1);
    }
};

    return(
        <div>
            count={count}

            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decriment</button>
            <button onClick={()=>setCount(initialvalue)}>Reset</button>
            <button onClick={inCrementbynum}>Incrementby%</button>

        </div>
    )
}