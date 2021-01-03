import React, {useState,useEffect} from 'react'

import ProductCard from '../components/ProductCard'
import '../styles/product/product.css'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import Proptypes from 'prop-types'


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
    const price = option === 'price' ? query.split('=') : undefined
    const [products, setProducts] = useState([])

    const visibleProductsOnPrice = price ? (
        products.filter(product => product[option] > price[0] && product[option] < price[1])
    ) : null

    const visibleProductsOnCategory = option && query ? (
        products.filter(product => product[option] === query)
    ) : products

    const visibleProducts = visibleProductsOnPrice ? visibleProductsOnPrice : visibleProductsOnCategory

    useEffect(() => {
        const displayProducts = props.products
       setProducts(displayProducts)
    }, [props.products])
    
    const emptyMessage = `Sorry we dont have product on this criteria`

    return (
        <div className = 'shop product-page-container'>
            
            <div class = 'shop-section'>
                {visibleProducts.length !== 0 ? (
                    visibleProducts.slice(0,6).map(product => {
                        return (
                        <ProductCard product = {product} />
                        )
                    })
                ) : (<p>{emptyMessage}</p>)}
            </div>

            <Sidebar options = {sidebarOptions} />
        </div>
    )
}

Shop.propTypes = {
    products: Proptypes.array.isRequired
}

const mapStateToProps = (state) => ({
    products: state.data.products,
})

export default connect(mapStateToProps)(Shop)



