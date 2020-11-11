import React, {useState,useEffect} from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import '../styles/product/product.css'

function Shop() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        axios.get('/products')
        .then(data => {
            setProducts(data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div className = 'shop-section'>
            
            {products.map(product => {
                return (
                <ProductCard product = {product} />
                )
            })}
        </div>
    )
}

export default Shop
