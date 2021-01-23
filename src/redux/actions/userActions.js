import {SET_USER, LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER, SET_UI, SET_ORDER} from '../types'
import axios from 'axios'

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_UI})
    axios.post('/login', userData, {withCredentials:true})
    .then(res => {
        const token = {idToken: res.data.token}
        axios.post('/sessionLogin', token, {withCredentials:true})
        .then(res => {
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
    dispatch({type: LOADING_UI})
    axios.get('/logout',{withCredentials:true}).then(res => {
        return res.data
    }) 
    .then(() => {
        delete axios.defaults.headers.common['Authorization']
        dispatch({ type: SET_UNAUTHENTICATED })
        dispatch({type: SET_UI})
    })
    .catch(err => console.log(err))
}

export const signupUser = (newUser, history) => (dispatch) => {
    dispatch({type: LOADING_UI})
    axios.post('/signup', newUser,{withCredentials:true})
    .then(res => {
        const token = {idToken: res.data.token}
        axios.post('/sessionLogin', token,{withCredentials:true})
        .then(res => {
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
    axios.get('/user',{withCredentials:true})
    .then(res => {
        dispatch({ 
            type: SET_USER,
            payload: res.data
        })
        dispatch({
            type: SET_UI
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
    // console.log(`this function is working`)
    dispatch({type: LOADING_UI})
    axios.post(`/product/${id}/addToCart`, product,{withCredentials:true})
    .then(data => {
        dispatch(getUserData())
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data.error
        })
    })
}

export const deleteFromCart = (product,id) => (dispatch) =>{
    dispatch({type: LOADING_UI})
    // console.log(`this function is working`)
    axios.delete(`/product/${id}/deleteFromCart`, product,{withCredentials:true})
    .then(data => {
        dispatch(getUserData())
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data.error
        })

    })
}

export const placeOrder = (order) => (dispatch) => {
    dispatch({type: LOADING_UI})
    axios.post(`/user/order`, order,{withCredentials:true})
    .then(data => {
        dispatch(getUserData())
    })
    .catch(err => console.log(err))
} 

export const clearErrors = () => (dispatch) => {
    dispatch({type:CLEAR_ERRORS})
} 