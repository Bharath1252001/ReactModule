import { SHOW,HIDE } from "./action"

const initialState = {
    display:true
}

const displayReducer = function (state = initialState,action){
    switch(action.type){
        case SHOW:{
            return{
                ...state,
                display:true
            }
        }
        case HIDE:{
            return{
                ...state,
                display:false
            }
        }
        default:
            return state
    }
}

export default displayReducer