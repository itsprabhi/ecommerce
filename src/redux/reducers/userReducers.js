import {SET_USER, LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED} from '../types'

const initialState = {
    authenticated:false,
    orders: [],
    credentials:{}
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState;
        case SET_USER:
            return {
                ...state,
                credentials:{...action.payload.crendentials},
                orders:[...action.payload.orders]
            }
        default:{
            return state;
        }
    }
}