import React, {useState,useEffect} from 'react'
import axios from 'axios'


function Shop() {

    const [products, setProducts] = useState(false)

    useEffect(() => {
        console.log('i fire once')
        axios.get('/products')
        .then(data => {
            setProducts(data.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Shop
