import React, {useEffect,useState} from 'react'
import axios from 'axios'

function ProductUpdate(props) {

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
        productType: "",
        productCategory:'',
        productBrand:'',
    })

    useEffect(() => {

        axios.get(`/product/${id}`)
        .then(data => {
            let pro = data.data
            console.log(pro)
            setProduct({
                ...product,
                ...data.data
            })
        })
        .then(() => console.log(product))
        .catch(err => {
            console.log(err)
        })
    }, []) 

    const onChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
        console.log(product)
    }

    const [data, setData] = useState([])

    const onImageSelect = (e) => {
        // set data
        setData([...e.target.files])
    }

    const uploadProductsPics = () => {
        let formData = new FormData()
        data.forEach(file => {
            formData.append('image', file)
        })
        axios.post('/productPictures', formData)
        .then(res => {
            console.log(res.data)
            const images = res.data.imageUrls
            setProduct({
                ...product,
                productPictures:[...images]
            })
        })
        .catch(err => console.log(err))
    }

    const onsubmit = (e) => {
        e.preventDefault()
        axios.post('/createProduct', product)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    const onUpdate = () => {
        
    }



    return (
        <div className = 'product-update-container'>
            <div className = 'product-card'>
            <form>
            <label for = 'productName'>Product Name</label><br />
            <input type = 'text' name = 'productName' onChange = {onChange} value = {product.name}></input><br />
            <label for = 'productPrice'>Product Price</label><br />
            <input type = 'text' name = 'productPrice'  onChange = {onChange} value = {product.price}></input><br />
            <label for = 'productDetails'>Product Details</label><br />
            <textarea name = 'productDetails'  onChange = {onChange} value = {product.productDetails}></textarea><br />
            <label for = 'productFeatures'>Product Details</label><br />
            <textarea type = 'text' name = 'productFeatures'  onChange = {onChange} value = {product.features}></textarea><br />
            <label for = 'producType'>Product Tyoe</label><br />
            <select id="product-type" name="productCategory"  onChange = {onChange} value = {product.productCategory}>
                <option value="airconditioners">Air Conditioner</option>
                <option value="cameras">Cameras</option>
                <option value="smartphones">Phones</option>
            </select><br />
            <label for = 'productSaleOn'>Product Tyoe</label><br />
            <select id="productSaleOn"  onChange = {onChange} name="productSaleOn">
                <option value="true">True</option>
                <option value="false">False</option>
            </select> <br />
            <label for = 'productSalePrice'>Product Sale Price</label><br />
            <input type = 'text' name = 'productSalePrice'  onChange = {onChange} value = {product.productSalePrice}></input><br />
            <select id="product-brand" name="productBrand"  onChange = {onChange}>
                <option value="none">Select Brand</option>
                <option value="samsung">Samsung</option>
                <option value="panasonic">Panasonic</option>
                <option value="lg">LG</option>
            </select><br />
            
            <button type = 'submit' onClick = {onsubmit}>Create Product</button>
            </form>
            <input type = 'file' name = 'images' multiple accept="image/jpeg, image/png" onChange = {onImageSelect}></input>
            <button onClick = {uploadProductsPics}>Upload Pictures</button>
            <div>
                {/* {product.productPictures.map(img => {
                    return (
                        
                            <img src = {img} alt = '' style = {{width:20, height:20}}></img>
                        
                    )
                })} */}
            </div>
            </div>
            <button onClick = {onUpdate}>Update</button>
        </div>
    )
}

export default ProductUpdate
