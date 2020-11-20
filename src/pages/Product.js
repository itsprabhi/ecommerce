import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Product(props) {
    const id = props.match.params.id

    const [product, setProduct] = useState({
        productCreatedAt: '',
        productDetails: '',
        productFeatures: "",
        productName: "",
        productPictures:[],
        productPrice: "",
        productSaleOn: "",
        productSalePrice: "",
        productType: ""
    })

    useEffect(() => {

        axios.get(`/product/${id}`)
        .then(data => {
            setProduct(data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    console.log(product)

    const { productName, productPrice, productPictures,productFeatures} = product

    return (
        <div className = 'product-page'>
            <div className = 'product-main'>
                <div className = 'product-main-img'>
                    <img src = {productPictures[0]} alt = '' />
                </div>
                <div className = 'product-main-content'>
                    <h1>
                        {productName}
                    </h1>
                    <div className = 'product-price'>
                        <h5><b>$ {productPrice}</b></h5>
                        <h5><b>Color: White</b></h5>
                    </div>
                    <div className = 'product-counter'>
                        <button onClick ='' /*()=> dispatch(plus())*/ >
                            +
                        </button>
                        1
                        <button onClick ='' /*()=> dispatch(plus())*/ >
                            -
                        </button>
                    </div>
                    <div className = 'product-desc'>
                        <p>{productFeatures}</p>
                    </div>
                    <div className = 'product-buy'>
                        <button>
                            Buy Now
                        </button>
                        <button>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className = 'product-details'>

            </div>
        </div>
    )
}

export default Product
