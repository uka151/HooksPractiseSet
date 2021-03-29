import React, { useState } from 'react';

const Third=()=>{

 // Using Object with useState   
const[name, setName]=useState({firstname:'', LastName:''})

    return(
        <div>
            <form>
            <input type="text" value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}/>

            <input type="text" value={name.LastName} onChange={e=>setName({...name, LastName:e.target.value})}/>
    
            <h2>firstNamr is:{name.firstname}</h2>
            <h2>LastName is:{name.LastName}</h2>
            <hw>{JSON.stringify(name)}</hw>
            </form>
        </div>
    )
}

export default Third;