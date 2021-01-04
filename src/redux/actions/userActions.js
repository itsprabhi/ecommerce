import {SET_USER, LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER, SET_UI, SET_ORDER} from '../types'
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


export const addCurrentOrder = (products) => (dispatch) => {
    dispatch({
        type:SET_ORDER,
        payload: products
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
    axios.post(`/product/${id}/addToCart`, product)
    .then(data => {
        console.log(data.data)
        dispatch(getUserData())
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data.error
        })
        console.log(err.response.data)
    })
}

export const deleteFromCart = (product,id) => (dispatch) =>{
    console.log(`this function is working`)
    axios.delete(`/product/${id}/deleteFromCart`, product)
    .then(data => {
        console.log(data.data)
        dispatch(getUserData())
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data.error
        })
        console.log(err.response.data)
    })
}

export const placeOrder = (order) => (dispatch) => {
    axios.post(`/user/order`, order)
    .then(data => {
        console.log(data.data)
    })
    .catch(err => console.log(err))
} 