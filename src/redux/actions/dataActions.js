import axios from 'axios'
import {SET_PRODUCTS} from '../types'

export const getProducts = () => (dispatch) => {
    axios.get('/products')
    .then(data => {
        console.log(`datatatatat`)
        console.log(data.data)
        dispatch({type:SET_PRODUCTS, payload: data.data})
    })
    .catch(err => console.log(err))
}

export const deleteProduct = (id) => (dispatch) => {
    axios.post(`/product/${id}/delete`)
    .then(data => {
        console.log(data.data)
    })
    .catch(err => {
        console.log(err)
        console.log(err.response.data)
    })
}

export const updateProduct = (product) => (dispatch) => {
    axios.post(`/product/${product.id}/update`, product)
    .then(data => {
        console.log(data.data)
    })
    .catch(err => {
        console.log(err)
    })
}