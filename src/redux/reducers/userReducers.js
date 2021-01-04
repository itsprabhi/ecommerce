import {SET_USER, LOADING_USER,LOADING_UI, SET_ORDER, SET_ERRORS, CLEAR_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED} from '../types'

const initialState = {
    authenticated:false,
    orders: [],
    credentials:{},
    currentOrder:{
        product:[]
    },
    loading:true
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return {
                ...initialState,
                loading:false
            };
        case SET_USER:
            return {
                ...state,
                loading:false,
                credentials:{...action.payload.crendentials},
                orders:[...action.payload.orders]
            }
        case LOADING_USER:
            return{
                ...state,
                loading:true
            }
        case SET_ORDER:
            return{
                ...state,
                currentOrder:{
                    product:[...action.payload]
                }
            }
        default:{
            return state;
        }
    }
}