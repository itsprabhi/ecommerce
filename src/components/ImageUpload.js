import React, {useState, useEffect} from 'react'
import axios from 'axios'


function ImageUpload() {

    const [data, setData] = useState([])


    const handleChange = (e) => {
        setData([...e.target.files])
    }

    // handling the submission of image
    const handleSubmit = () => {
        let formData = new FormData()
        data.forEach(file => {
            formData.append('image', file)
        })
        axios.post('/productPictures', formData)
        .then(res => {
            // console.log(res.data)
        })
        .catch(err => console.log(err))
    }


    useEffect(() => {
        // console.log(data)
    }, [data])


    return (
        <div>
            <input type = 'file' name = 'images' multiple accept="image/jpeg, image/png" onChange = {handleChange}></input>
            <button onClick = {handleSubmit}>Submit</button>
        </div>
    )


}

export default ImageUpload
