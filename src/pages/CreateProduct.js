import React, {useState} from 'react'
import ImageUpload from '../components/ImageUpload'
import axios from 'axios'

function CreateProduct() {

    

    const newProduct = {
        productName: '',
        productPrice: null,
        productDetails: '',
        productCategory:'',
        productBrand:'',
        productFeatures: '',
        productSale: null,
        productSalePrice: null,
        productPictures: [],
    }

    const [product,setProduct] = useState(newProduct)
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
            // console.log(res.data)
            const images = res.data.imageUrls
            setProduct({
                ...product,
                productPictures:[...images]
            })
        })
        .catch(err => console.log(err))
    }

    const onChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
        // console.log(product)
    }

    const onsubmit = (e) => {
        e.preventDefault()
        axios.post('/createProduct', product)
        .then(res => {
            // console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className = 'create-product-form'>
            <h3>Create new product</h3>
            <div className = 'create-product-images'>
                <h4>
                    Upload product photos
                </h4>
            <label for="file-upload" className = 'create-product-image-btn'>
               Select Images
            </label>
            <input id = 'file-upload' type = 'file' name = 'images' multiple accept="image/jpeg, image/png" onChange = {onImageSelect}></input> 
            <button class = 'buy-btn' onClick = {uploadProductsPics}>Upload Pictures</button>
            <div>
                {product.productPictures.map(img => {
                    return (
                        
                            <img src = {img} alt = '' style = {{width:20, height:20}}></img>
                        
                    )
                })}
            </div>
            </div>
            <form>
            <label for = 'productName'>Product Name</label><br />
            <input type = 'text' name = 'productName' onChange = {onChange}></input><br />
            <label for = 'productPrice'>Product Price</label><br />
            <input type = 'text' name = 'productPrice'  onChange = {onChange}></input><br />
            <label for = 'productDetails'>Product Details</label><br />
            <textarea className = 'product-create-detail' name = 'productDetails'  onChange = {onChange}></textarea><br />
            <label for = 'productFeatures'>Product Details</label><br />
            <textarea className = 'product-create-detail' type = 'text' name = 'productFeatures'  onChange = {onChange}></textarea><br />
            <label for = 'producType'>Product Tyoe</label><br />
            <select id="product-type" name="productCategory"  onChange = {onChange}>
                <option value="airconditioners">Air Conditioner</option>
                <option value="cameras">Cameras</option>
                <option value="smartphones">Phones</option>
            </select><br />
            <label for = 'productSaleOn'>Product Sale</label><br />
            <select id="productSaleOn"  onChange = {onChange} name="productSaleOn">
                <option value="true">True</option>
                <option value="false">False</option>
            </select> <br />
            <label for = 'productSalePrice'>Product Sale Price</label><br />
            <input type = 'text' name = 'productSalePrice'  onChange = {onChange}></input><br />
            <select id="product-brand" name="productBrand"  onChange = {onChange}>
                <option value="none">Select Brand</option>
                <option value="samsung">Samsung</option>
                <option value="panasonic">Panasonic</option>
                <option value="lg">LG</option>
            </select><br />
            
            <button className = 'buy-btn' type = 'submit' onClick = {onsubmit}>Create Product</button>
            </form>
        </div>
    )
}

export default CreateProduct
