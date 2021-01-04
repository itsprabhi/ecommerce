import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {placeOrder} from '../redux/actions/userActions'
function Checkout(props) {

// firstName(pin):'rajat'
// userId(pin):'w0cY1o3bquM3QIVlCAincyDWP083'
// orders(pin):[]
// userEmail(pin):'rajatarora8854@gmail.com'
// userHandle(pin):'rajat'
// profilePicture(pin):'https://firebasestorage.googl…alt=media'
// cart(pin):[]
// lastName(pin):'rajat'
// createdAt(pin):'2021-01-02T23:55:4



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
        paymentType: 'paypal',
        taxPrice: '222',
        shippingPrice: '22',
        products:[]
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

        setOrder({
            ...order,
            firstName,
            lastName,
            userEmail,
            userId,
            userHandle,
            products
        })
        // console.log(products)
    },[props.user])

    // useEffect(() => {
    //     console.log(props.user.currentOrder.product)
    //     setOrderProducts([...props.user.currentOrder.product])
    //     setOrder({
    //         ...order,
    //         products:[...orderProducts]
    //     })
    //     console.log(order)
    // },[props.user.currentOrder])

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


    return (
        <div className = 'checkout-page'>
            <div className = 'order-details'>
                <h3>
                    Your order details
                </h3>
                <p>No. of item - {order.products.length}</p>
            </div>
            <form>
                <div className = 'checkout-form-name'>
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
                    <label for = 'firstname'>Enter Adress</label><br/>
                    <input onChange = {onHandle} type = 'text' name = 'address' placeholder = 'Enter Address'></input><br/>
                    <input onChange = {onHandle} type = 'text' name = 'city' placeholder = 'Enter City'></input>
                    <input onChange = {onHandle} type = 'text' name = 'postalCode' placeholder = 'Enter Postal Code'></input><br/>
                    <input onChange = {onHandle} type = 'text' name = 'country' placeholder = 'Enter Country'></input>
                </div>
                <div className = 'checkout-form-payment'>

                </div>
                <button onClick = {onOrderSubmit}>Submit</button>
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
