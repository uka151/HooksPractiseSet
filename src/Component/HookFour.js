import React, { useState } from 'react';

const HookFour= ()=>{
    const[item,setItem]=useState([]);
//Using Array with useState

const setdata=()=>{
    setItem([...item,{
        id:item.length,
        value:Math.floor(Math.random()*10)+1

    }
       ])
}

    return(
        <div>

            <button type="submit" onClick={setdata}>Add Value</button>
            <ol>{
                item.map(item=><li key={item.id} >{item.value}</li>)
                }</ol>
        </div>
    )
}

export default HookFour