import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Product(props) {
    const id = props.match.params.id

    const [product, setProduct] = useState([])

    useEffect(() => {

        axios.get(`/product/${id}`)
        .then(data => {
            setProduct(data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div className = 'shop-section'>
            {product.productName}
        </div>
    )
}

export default Product
