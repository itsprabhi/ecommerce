import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import ProductCard from './ProductCard'

const sidebarOptions = {
    category:[
        {text:'Cameras',url:'cameras'},
        {text:'Smartphones', url: 'smartphones'},
        {text:'Air Conditioners',url:'airconditioners'}
    ]
}

function Sidebar (props) {


    const optionObject = props.options

    const keys = Object.keys(optionObject)

    return (
        <div className = 'sidebar-shop sidebar home-sidebar'>
            <div className = 'sidebar-option'>
                    <div className = 'sidebar-option-header sidebar-search'>
                        <h3>Search Here</h3>
                        <input className = 'search-box' type = 'text' name = 'search' placeholder = 'Enter your search here'></input><br/>
                        <button className = 'buy-btn search-btn'>
                            Search
                        </button>
                    </div>
                    
                </div>
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

function HomeShop(props) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const displayProducts = props.products.slice(0,6)
        setProducts(displayProducts)
    }, [props.products])

    return (
        <div className = 'home-shop'>
            <div class = 'shop-section'>
                {products.map(product => {
                    return (
                    <ProductCard product = {product} />
                    )
                })}
            </div>
            <Sidebar options = {sidebarOptions} />
            
        </div>
    )
}



HomeShop.propTypes = {
    products: Proptypes.array.isRequired
}

const mapStateToProps = (state) => ({
    products: state.data.products,
})

export default connect(mapStateToProps)(HomeShop)

