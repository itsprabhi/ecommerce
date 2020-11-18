import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <div>
            Welcome to admin panel
            <Link to = '/admin/create/product'>Link</Link>
        </div>
    )
}

export default Admin
