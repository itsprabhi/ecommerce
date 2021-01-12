import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UI} from '../types'

const initialState = {
    loading: true,
    errors: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null
            }
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        case SET_UI:{
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state
    }
}