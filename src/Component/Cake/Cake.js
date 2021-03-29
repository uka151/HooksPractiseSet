
import { buyCake } from '../Redux'
import {connect} from 'react-redux'

const Cake =(props)=>{


    return (
        <div>
           <h1>Cake App: {props.numOfCake}</h1>
           <button type="submit" onClick={()=>props.buycake()}>Buy Cake</button>
        </div>
    )
}

const mapDispatchToProps =dispatch =>{
    return {
        buycake : ()=>dispatch(buyCake())
    }
} 
const mapStateToProps = state=>{
    return {
        numOfCake: state.numOfCake
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cake);