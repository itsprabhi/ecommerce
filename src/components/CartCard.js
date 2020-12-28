import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function CartCard(props) {



    const {productName, productPrice, productQuantity, productId } = props.product
    console.log(props)


    return (
        <div className = 'cart-card'>
            <div className = 'cart-card-txt'>
                <div className = 'card-heading'>
                    Product Name:
                </div>
                {productName} <br />
                <Link to = {`/product/${productId}`}>
                    View Product
                </Link>
            </div>
            <div className = 'cart-card-quantity'>
                <div className = 'card-heading'>
                    Product Quantity:
                </div>
                <button className = 'add-btn' onClick = {() => props.onAdd(productId)} >+</button>
                {productQuantity}
                <button className = 'add-btn' onClick = {() => props.onSubtract(productId)}>-</button>
            </div>
            <div className = 'cart-card-price'>
                <div className = 'card-heading'>
                    Product Price:
                </div>
                $ {(productPrice * productQuantity).toFixed(2) }
            </div>
        </div>
    )
}

export default CartCard