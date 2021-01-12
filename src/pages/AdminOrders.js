import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import OrderList from '../components/OrderList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function AdminOrderCard(){
    return (
        <div className = 'admin-order-card'>
            <div className = 'admin-order-card-txt'>
                <h5>Your order Id</h5>
                <div>
                    <div>
                        <p>
                            <span>Product Name - </span>
                            Product one
                        </p>
                        <p>
                            <span>Product Quantity - </span>
                            2
                        </p>
                    </div><div>
                        <p>
                            <span>Product Name - </span>
                            Product one
                        </p>
                        <p>
                            <span>Product Quantity - </span>
                            2
                        </p>
                    </div>
                </div>
            </div>
            <div className = 'admin-order-card-link'>
                <p>
                    <Link to = ''>View order details</Link>
                </p>
            </div>
            <div className = 'admin-order-card-options'>
                <div>
                    <span>Delivered</span><br />
                    <FontAwesomeIcon icon = {faCheck} />
                </div>
                <div className = 'order-incomplete'>
                    <span>Paid</span><br />
                    <FontAwesomeIcon icon = {faCheck} />
                </div>
            </div>
        </div>
    )
}

function AdminOrders() {


    return (
        <div className = 'admin-order'>
            <div className = 'product-page-container'>
                <div className = 'admin-order-content'>
                    <h2>All orders</h2>
                    <AdminOrderCard />
                </div>
            </div>
        </div>
    )
}

export default AdminOrders
