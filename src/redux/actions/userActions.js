import {SET_USER, LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED} from '../types'
import axios from 'axios'
import Cookies from 'js-cookie'

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_UI})
    axios.post('/login', userData)
    .then(res => {
        const token = {idToken: res.data.token}
        axios.post('/sessionLogin', token)
        .then(res => {
            console.log(res.data);
            dispatch({type: SET_AUTHENTICATED})
        dispatch(getUserData())
        dispatch({ type: CLEAR_ERRORS })
        history.push('/')
        })
        
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

export const logoutUser = () => (dispatch) => {
    axios.get('/logout').then(res => {
        console.log(res.data)
    }) 
    delete axios.defaults.headers.common['Authorization']
    dispatch({ type: SET_UNAUTHENTICATED})
}

export const signupUser = (newUser, history) => (dispatch) => {
    dispatch({type: LOADING_UI})
    axios.post('/signup', newUser)
    .then(res => {
        const FBIToken = `Bearer ${res.data.token}`
        localStorage.setItem('FBIToken', FBIToken)
        axios.defaults.headers.common['Authorization'] = FBIToken; //setting the token to default axios requests
        dispatch({type: SET_AUTHENTICATED})
        dispatch(getUserData())
        dispatch({ type: CLEAR_ERRORS })
        history.push('/')
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


export const getUserData = () => (dispatch) => {
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