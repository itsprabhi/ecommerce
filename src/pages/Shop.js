import React, {useState,useEffect} from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import '../styles/product/product.css'
import { Link } from 'react-router-dom'


const sidebarOptions = {
    category:[
        {text:'Cameras',url:'cameras'},
        {text:'Smartphones', url: 'smartphones'},
        {text:'Air Conditioners',url:'airconditioners'}
    ],
    brand: [
        {text:'Samsung',url:'samsung'},
        {text:'LG',url:'lg'}, 
        {text:'Panasonic',url:'panasonic'}
    ],
    price: [
        {text:'>$100',url:'0=100'}, 
        {text:'$100 - $300',url:'100=300'},
        {text:'$300-$600', url:'300=600'},
        {text:'<$600', url:'600='}
    ]
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
                            {optionObject[categoryHeading].map(categoryTopic => {
                                return (
                                <Link to = {`/shop/${categoryHeading}/${categoryTopic.url}`}>
                                    <li>{categoryTopic.text}</li>
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
    // console.log(query.split('='))
    // console.log(query)
    const [products, setProducts] = useState([])

    // const visibleProducts = () => {
    //     if(option && query){
    //         let dp = 
    //         console.log(dp)
    //         return dp
    //     }
    //     return products
    // }

//    const visibleProducts = () => {
//         if(option === undefined){
//             return products
//         }
//         if(option !== 'price'){
//             return products.filter(product => product[option] === query)
//         }
//         console.log(query.split('?'))
//    }

    const visibleProducts = option && query ? (
        products.filter(product => product[option] === query)
    ) : products

    useEffect(() => {
        axios.get('/products')
        .then(data => {
            setProducts(data.data)
        })
        .then(() => {
            // visibleProducts()
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    

    return (
        <div className = 'shop'>
            <Sidebar options = {sidebarOptions} />
            <div class = 'shop-section'>
                {visibleProducts.map(product => {
                    return (
                    <ProductCard product = {product} />
                    )
                })}
            </div>
        </div>
    )
}

export default Shop
