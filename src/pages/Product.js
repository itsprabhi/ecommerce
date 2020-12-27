import React, {useState, useEffect} from 'react'

import { connect } from 'react-redux'
import Proptypes from 'prop-types'



function Product(props) {
    const id = props.match.params.id

    const [product, setProduct] = useState({
        productCreatedAt: '',
        productDetails: '',
        features: "",
        name: "",
        productPictures:[],
        price: "",
        productSaleOn: "",
        productSalePrice: "",
        productType: ""
    })
    
    useEffect(() => {
        const el = props.products.filter(pro => pro.id === id)
        console.log(el[0])
        setProduct({...product, ...el[0]})
    }, [props.products])

    // console.log(product)

    const addProductQuantity = () => {

    }

    let { name, price, productPictures, features, details} = product

    if (!typeof productPictures === Array || productPictures.length === 0){
        productPictures = ['https://firebasestorage.googleapis.com/v0/b/aus-ecommerce.appspot.com/o/defaultProfilePicture.jpg?alt=media']
    }

    return (
        <div className = 'page'>
            <div className = 'product-page'>
            <div className = 'product-page-container'>
                <div className = 'product-main'>
                    <div className = 'product-main-img'>
                        <img src = {productPictures[0]} alt = '' />
                    </div>
                    <div className = 'product-main-content'>
                        <h1>
                            {name}
                        </h1>d
                        <div className = 'product-price'>
                            <h5><b>$ {price}</b></h5>
                            <h5><b>Color: White</b></h5>
                        </div>
                        <div className = 'product-desc'>
                            <p>{features}</p>
                        </div>
                        <div className = 'product-counter'>
                            <h5>Quantity : </h5> 
                            <button onClick ={addProductQuantity} /*()=> dispatch(plus())*/ >
                                +
                            </button>
                            1
                            <button onClick = {addProductQuantity} /*()=> dispatch(plus())*/ >
                                -
                            </button>
                        </div>
                        <div className = 'product-buy'>
                            <button className = 'buy-btn'>
                                Buy Now
                            </button>
                            <button className = 'buy-btn-trans'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className = 'product-brand'>
                    <h4>About Brand</h4>
                    <p>{details}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

Product.propTypes = {
    products: Proptypes.array.isRequired
}

const mapStateToProps = (state) => ({
    products: state.data.products
})

export default connect(mapStateToProps)(Product)

