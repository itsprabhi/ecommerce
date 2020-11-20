import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/product/product.css'
function ProductCard(props) {
    let { productName, productPictures, productPrice, id} = props.product

    if (!typeof productPictures === Array){
        productPictures = ['https://firebasestorage.googleapis.com/v0/b/aus-ecommerce.appspot.com/o/defaultProfilePicture.jpg?alt=media']
    }

    

    return (
        <div>
            <div className = 'product-card'>
                <div className = 'product-img'>
                    <img src = {productPictures[0]} alt = {productName} />
                </div>
                <div className = 'product-txt'>
                    <Link to = {`shop/product/${id}`}>
                        <h5>
                            {productName}
                        </h5>
                    </Link>
                    <p>
                        {productPrice}
                    </p>
                </div>
            </div>
        </div>
    )
} 

export default ProductCard
