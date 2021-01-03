import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/product/product.css'

import {connect} from 'react-redux'
import {addToCart} from '../redux/actions/userActions'

function ProductCard(props) {
    let {name, productPictures, price, id} = props.product

    if (!typeof productPictures === Array || productPictures.length === 0){
        productPictures = ['https://firebasestorage.googleapis.com/v0/b/aus-ecommerce.appspot.com/o/defaultProfilePicture.jpg?alt=media']
    }

    const onAdd = () => {
        console.log(props.product)
        props.addToCart(props.product,props.product.id)
    }
    return (
        <div>
            <div className = 'product-card'>
                <div className = 'product-img'>
                    <img src = {productPictures[0]} alt = '' />
                </div>
                <div className = 'product-txt'>
                    <div>
                    <Link to = {`/shop/product/${id}`}>
                        <h5>
                            {name}
                        </h5>
                    </Link>
                    <button className = 'add-btn add-btn-card' onClick = {onAdd}>+</button>
                    </div>
                    <p>
                        $ {price}
                    </p>
                </div>
            </div>
        </div>
    )
} 

const mapStateToProps = (state) => ({
    ui:state.ui
})

const mapActionsToProps = {
    addToCart
}

export default connect(mapStateToProps,mapActionsToProps)(ProductCard)


