import axios from 'axios'
import {LOADING_UI, SET_PRODUCTS, SET_UI} from '../types'

export const getProducts = () => (dispatch) => {
    dispatch({type:LOADING_UI})
    axios.get('/products',{withCredentials:true})
    .then(data => {
        dispatch({type:SET_UI})
        // console.log(`datatatatat`)
        // console.log(data.data)
        dispatch({type:SET_PRODUCTS, payload: data.data})
    })
    .catch(err => console.log(err))
}

export const deleteProduct = (id) => (dispatch) => {
    dispatch({type:LOADING_UI})
    axios.post(`/product/${id}/delete`,{withCredentials:true})
    .then(data => {
        dispatch({type:SET_UI})
        // console.log(data.data)
    })
    .catch(err => {
        // console.log(err)
        console.log(err.response.data)
    })
}

export const updateProduct = (product) => (dispatch) => {
    dispatch({type:LOADING_UI})
    axios.post(`/product/${product.id}/update`, product,{withCredentials:true})
    .then(data => {
        dispatch({type:SET_UI})
    })
    .catch(err => {
        console.log(err)
    })
}