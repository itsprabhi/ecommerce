import {SET_USER, LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SET_AUTHENTICATED} from '../types'
import axios from 'axios'

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_UI})
    axios.post('/login', userData)
    .then(res => {
        const FBIToken = `Bearer ${res.data.token}`
        localStorage.setItem('FBIToken', FBIToken)
        axios.defaults.headers.common['Authorization'] = FBIToken; //setting the token to default axios requests
        dispatch({type: SET_AUTHENTICATED})
        dispatch(getUserData())
        dispatch({ type: CLEAR_ERRORS })
        history.push('/user')
    })
    .catch(err => {
        if(!err.response){
            return
        }
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}

const getUserData = () => (dispatch) => {
    axios.get('/user')
    .then(res => {
        dispatch({ 
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}