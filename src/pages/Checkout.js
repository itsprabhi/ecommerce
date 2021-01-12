import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {placeOrder} from '../redux/actions/userActions'



function Checkout(props) {

    
    const [order, setOrder] = useState({
        firstName:'',
        lastName:'',
        userEmail:'',
        userId:'',
        userHandle:'',
        address:'',
        phoneNumber:'',
        city: '',
        postalCode: '',
        country: '',
        isPaid: 'true',
        paymentType: '',
        taxPrice: '222',
        shippingPrice: '22',
        products:[],
        orderBill:0,
        taxes:0,
        totalCost:0,
        totalOrderProducts:0
    })

    

    useEffect(() => {

        const { 
            firstName, 
            lastName, 
            userEmail, 
            userId, 
            userHandle 
        } = props.user.credentials

        const products = props.user.currentOrder.product
        
        // calculating our taxes, total items, and total costs
        const totalOrderProducts = parseFloat(products.reduce(function (acc, obj) { return acc + obj.productQuantity; }, 0))
        let grossCost = parseFloat((products.reduce(function (acc, obj) { return acc + obj.productPrice*obj.productQuantity; }, 0)).toFixed(2))
        let taxes = parseFloat((13/100*grossCost).toFixed(2))

        setOrder({
            ...order,
            firstName,
            lastName,
            userEmail,
            userId,
            userHandle,
            products,
            orderBill:taxes+grossCost,
            taxes:taxes,
            totalCost:grossCost,
            totalOrderProducts:totalOrderProducts
        })

    },[props.user])


    const onOrderSubmit = (e) => {
        e.preventDefault()
        console.log(order)
        props.placeOrder(order)
    }

    const onHandle = (e) => {
        setOrder({
            ...order,
            [e.target.name] : e.target.value
        })
    }

    // order completion button
    const isPaypal = order.paymentType === 'paypal' ? (<button className = 'buy-btn'>Complete by Paying</button>) : (<button className = 'buy-btn'>Complete my Order</button>)

    return (
        <div className = 'checkout-page'>
            <div className = 'order-details'>
                <h2>Checkout</h2>
                <h3>
                    Your order details
                </h3>
                {order.products.map(product => {
                    return (
                        <>
                            <div className = 'order-details-card'>
                            <p>Product Name - {product.productName}</p>
                            <p>Product Quantity - {product.productQuantity}</p>
                            <h5>Total Price - {(product.productPrice * product.productQuantity).toFixed(2)}</h5>  
                            </div>
                        </>
                    )
                })}
                <div className = 'order-details-Summary'>
                    <h3>No. of item - {order.totalOrderProducts}</h3>
                    <h3>Gross Total = ${order.totalCost}</h3>
                    <h3>Taxes = ${order.taxes}</h3>
                    <h3>Your Bill = ${order.orderBill}</h3>
                </div>
            </div>
            <form>
                <div className = 'checkout-form-name'>
                    <h3>Step 1</h3>
                    <label for = 'firstname'>Enter Name</label><br/>
                    <input onChange = {onHandle} type = 'text' name = 'firstname' placeholder = 'First name'></input>
                    <input onChange = {onHandle} type = 'text' name = 'firstname' placeholder = 'Last name'></input>
                </div>
                <div className = 'checkout-form-info'>
                    <label for = 'firstname'>Enter Information</label><br/>
                    <input onChange = {onHandle} type = 'email' name = 'email' placeholder = 'Email address'></input><br />
                    <input onChange = {onHandle} type = 'text' name = 'userHandle' placeholder = 'User Handle'></input>
                    <input onChange = {onHandle} type = 'text' name = 'phoneNumber' placeholder = 'Phone Number'></input>
                </div>
                <div className = 'checkout-form-adress'>
                    <h3>Step 2</h3>
                    <label for = 'firstname'>Enter Adress</label><br/>
                    <input onChange = {onHandle} type = 'text' name = 'address' placeholder = 'Enter Address'></input><br/>
                    <input onChange = {onHandle} type = 'text' name = 'city' placeholder = 'Enter City'></input>
                    <input onChange = {onHandle} type = 'text' name = 'postalCode' placeholder = 'Enter Postal Code'></input><br/>
                    <input onChange = {onHandle} type = 'text' name = 'country' placeholder = 'Enter Country'></input>
                </div>
                <div className = 'checkout-form-payment'>
                    <h3>Step 3</h3>
                    <label for = 'paymentType'>Payment Method</label>< br />
                        <div>
                        
                        <input type = 'radio' value = 'paypal' name= 'paymentType'  onChange = {onHandle}/>
                        <label>Paypal</label><br />
                        
                        <input type = 'radio' value = 'cash on delivery' name = 'paymentType' onChange = {onHandle}/>
                        <label>Cash on Delivery</label><br />
                        </div>
                    {isPaypal}
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapActionsToProps = {
    placeOrder
}

export default connect(mapStateToProps,mapActionsToProps)(Checkout)
