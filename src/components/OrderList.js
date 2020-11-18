import React from 'react'


function OrderCard(props){
    return (
        <div className = 'order-card'>
            <div className = 'order-card-number'>
                <p>1.</p>
            </div>
            <div className = 'order-card-details'>
                <p>Order Name is this</p>
            </div>
            <div className = 'order-card-delivery'>
                <p>January 1, 2020</p>
            </div>
        </div>
    )
}

function OrderList(props) {
    const orders = props.orders
    return (
        <div className = 'order-list-container'>
            <div>
            <h2>
            Your total orders are: {orders.length}
        </h2>
        </div>
            <div className = 'order-list-header'>
                <div className = 'order-number'>
                    <p>
                        Order No.
                    </p>
                </div>
                <div className = 'order-Details'>
                    <p>
                        Order Details
                    </p>
                </div>
                <div className = 'order-Delivered'>
                    <p>
                        Order Delivered On
                    </p>
                </div>
            </div>
            <div className = 'order-list'>
                {orders.map(order => {
                    return (<OrderCard order = {order} />)
                })}
            </div>
        </div>
    )
}

export default OrderList
