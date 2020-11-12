import {SET_USER, LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED} from '../types'

const initialState = {
    authenticated:false,
    orders: []
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
                ...action.payload
            }
        default:{
            return state;
        }
    }
}