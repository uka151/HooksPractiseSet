import React, { useEffect, useState } from 'react'

function FifthExs(){
const[count, setCount]=useState(0)
//useEffect practise instead of ComponentDidMount & ComponentDidUpdate
useEffect(()=>{
    document.title=count
})

    return(
        <div>

            <button onClick={()=>setCount(count+1)}>CLick me to Change value: {count}</button>
        </div>
    )
}

export default FifthExs;