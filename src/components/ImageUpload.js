import axios from 'axios'
import React, {useState, useEffect} from 'react'

function ImageUpload() {

    

    const [data, setData] = useState([])

    const handleChange = (e) => {
        // set data
        setData([...e.target.files])
    }
    const handleSubmit = () => {
        let formData = new FormData()
        data.forEach(file => {
            formData.append('image', file)
        })
        axios.post('/productPictures', formData)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div>
            <input type = 'file' name = 'images' multiple accept="image/jpeg, image/png" onChange = {handleChange}></input>
            <button onClick = {handleSubmit}>Submit</button>
        </div>
    )
}

export default ImageUpload
