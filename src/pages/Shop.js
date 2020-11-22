import React, {useState,useEffect} from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import '../styles/product/product.css'
import { Link } from 'react-router-dom'


const sidebarOptions = {
    categories:['cameras','smartphones','air conditioners'],
    brands: ['samsung', 'LG', 'panasonic'],
    price: ['>$100', '$100 - $300','$300-$600','<$600']
}

function Sidebar (props) {
    const optionObject = props.options

    const keys = Object.keys(optionObject)

    return (
        <div className = 'sidebar-shop'>
            {keys.map(categoryHeading => {
            return (
                <div className = 'sidebar-option'>
                    <div className = 'sidebar-option-header'>
                        <h3>{categoryHeading}</h3>
                        <ul>
                            {optionObject[categoryHeading].map(e => {
                                return (
                                <Link to = {`/shop/${categoryHeading}/${e}`}>
                                    <li>{e}</li>
                                </Link>
                                )
                            })}
                        </ul>
                    </div>
                    
                </div>
            )
        })}
        </div>
    )
}

function Shop(props) {
    const option = props.match.params.option
    const query = props.match.params.id
    console.log(query)
    const [products, setProducts] = useState([])

    const visibleProducts = () => {
        if(option && query){
            let dp = products.filter(product => product[option] === query)
            console.log(dp)
            return dp
        }
        return products
    }

    useEffect(() => {
        axios.get('/products')
        .then(data => {
            setProducts(data.data)
        })
        .then(() => {
            visibleProducts()
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    

    return (
        <div className = 'shop'>
            <Sidebar options = {sidebarOptions} />
            <div class = 'shop-section'>

                {products.map(product => {
                    return (
                    <ProductCard product = {product} />
                    )
                })}
            </div>
        </div>
    )
}

export default Shop
