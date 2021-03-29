import { buyCake } from './CakeAction'
import {BUY_CAKE} from './CakeActionType'

const initialState ={
    numOfCake:10
}

export const cakeReducer =(state=initialState,action)=>{

    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCake: state.numOfCake-1
        }

        default : return state;
    }
}