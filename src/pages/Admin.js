import React from 'react'
import '../styles/admin/admin.css'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <div className = 'admin-heading'>
            <h3>Welcome to admin panel</h3>
            {/* <Link to = '/admin/create/product'>Link</Link> */}
            <div className = 'admin-panel-grid'>
                <div className = 'admin-panel-grid-box admin-panel-box-1'>
                    <h4>View all the orders</h4>
                    <Link to = '/admin/orders'>View Orders</Link>
                </div>
                <div className = 'admin-panel-grid-box admin-panel-box-2'>
                    <h4>View all the Products</h4>
                    <Link to = '/admin/products'>View Products</Link>
                </div>
                <div className = 'admin-panel-grid-box admin-panel-box-3'>
                    <h4>Create a new Product</h4>
                    <Link to = '/admin/create/product'>Create</Link>
                </div>
                <div className = 'admin-panel-grid-box admin-panel-box-4'>
                    <h4>View all the orders</h4>
                    <Link to = '/admin'>View Orders</Link>
                </div>
            </div>
        </div>
    )
}

export default Admin
