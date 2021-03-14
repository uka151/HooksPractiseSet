import React, { useState } from 'react'




 function Counter(){
  const[count, setCount]=useState(0);

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>click me for change value:{count}</button>
        </div>
    )
}


export default Counter

/*class Home extends React.Component{
    constructor(){
        super();
       this.state={
           count:0,
       }

       this.inCreamenrCOunt=this.inCreamenrCOunt.bind(this);
    }
inCreamenrCOunt=()=>{
    this.setState({
        count:this.state.count+1,
    })
}


render(){
    return(
        <div>
        <div>Hello Hooks</div>

        <button type="submit"  onClick={this.inCreamenrCOunt}>click me to increase value:{this.state.count}</button>
          

            </div>  )
}

};*/


