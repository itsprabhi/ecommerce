import {SET_USER, LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER} from '../types'
import axios from 'axios'

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
    .then(() => {
        delete axios.defaults.headers.common['Authorization']
        dispatch({ type: SET_UNAUTHENTICATED })
    })
    .catch(err => console.log(err))
}

export const signupUser = (newUser, history) => (dispatch) => {
    dispatch({type: LOADING_UI})
    axios.post('/signup', newUser)
    .then(res => {
        const token = {idToken: res.data.token}
        console.log(token)
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


export const getUserData = () => (dispatch) => {
    dispatch({type:LOADING_USER})
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

export const addToCart = (product,id) => (dispatch) =>{
    console.log(`this function is working`)
    axios.post(`/product/${id}/addToOrder`, product)
    .then(data => {
        console.log(data.data)
        getUserData()
    })
    .catch(err => {
        console.log(err)
    })
}