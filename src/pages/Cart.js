import React, {useState, useEffect} from 'react'
import CartCard from '../components/CartCard'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import '../styles/product/product.css'


function Cart(props) {

    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log(cart)
    }, [cart])

    useEffect(() => {
        setCart([...props.cart])
    }, [props.cart])

    const onAdd = (id) => {
        // get element and index to change
        const arr = cart.filter(el => el.productId === id)
        const index = cart.findIndex(el => el.id === id)
        // make changes
        arr[0].productQuantity++
        const newArr = [...cart]
        newArr[index] = arr[0]

        setCart(newArr)
    }

    const onSubtract = (id) => {
        const arr = cart.filter(el => el.productId === id)
        const index = cart.findIndex(el => el.id === id)
        // make changes
        if(arr[0].productQuantity === 0){
            return 
        }else{
            arr[0].productQuantity--
            const newArr = [...cart]
            newArr[index] = arr[0]
            setCart(newArr)
        }  
    }

    return (
        <div className = 'cart'>
            <div className = 'product-page-container'>
                <div className = 'cart-content'>
                    <h1>
                        Your Cart
                    </h1>
                    <div className = 'cart-cards'>
                        {cart.map(product => (
                            <CartCard product = {product} onAdd = {onAdd} onSubtract = {onSubtract} />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

Cart.propTypes = {
    cart: Proptypes.array.isRequired
}

const mapStateToProps = (state) => ({
    cart: state.user.credentials.cart
})




export default connect(mapStateToProps)(Cart)


