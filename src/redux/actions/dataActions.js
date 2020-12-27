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