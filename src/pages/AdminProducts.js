import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'
import {deleteProduct} from '../redux/actions/dataActions'

const AdminProductsCard = (props) => {
    const product = props.product
    const index = props.index + 1
    return (
        <div className = 'admin-product-card'>
            <div className = 'admin-product-text'>
                <div className = 'admin-product-index'>
                    {index}.
                </div>
                {/* <div className = 'admin-product-img'>
                    {}
                </div> */}
                <div>
                    {product.name}
                </div>
            </div>
            <div className = 'admin-product-options'> 
                <div className = 'admin-product-delete' onClick = {() => props.deleteProduct(product.id)}>
                        <FontAwesomeIcon icon = {faTrash} />
                </div>
                <div className = 'admin-product-edit'>
                    <Link to = {`/admin/product/update/${product.id}`}>
                        <FontAwesomeIcon icon = {faPencilAlt} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

function AdminProducts(props) {
    const [products,setProducts] = useState([])

    useEffect(() => {
        setProducts(props.products)
    }, [props.products])

    const productCount = props.products.length === 0 ? 0 : props.products.length

    return (
        <div className = 'admin-product'>
            <div className = 'admin-product-container'>
                <h2>
                    Total products {productCount}
                </h2>
                <div className = 'admin-product-list'>
                    {products.map(product => {
                        return (
                            <AdminProductsCard 
                                product = {product} 
                                index = {products.indexOf(product)}
                                deleteProduct = {props.deleteProduct}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.data.products
})

const mapActionsToProps = {
    deleteProduct
}

export default connect(mapStateToProps,mapActionsToProps)(AdminProducts)
