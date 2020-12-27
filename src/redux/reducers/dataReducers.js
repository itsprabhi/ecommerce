import {SET_USER, LOADING_USER,LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_PRODUCTS} from '../types'

const initialState = {
    products:[],
    loading:true
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS:
            return {
                ...state,
                products:[ ...action.payload],
                loading:false
            };
       
        default:{
            return state;
        }
    }
}