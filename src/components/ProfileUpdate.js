import axios from 'axios'
import React, {useState, useEffect} from 'react'

function ProfileUpdate() {

    

    const [data, setData] = useState([])

    const handleChange = (e) => {
        // set data
        setData([e.target.files[0]])
    }
    const handleSubmit = () => {
        let formData = new FormData()
        formData.append('image', data[0])
        axios.post('/user/upload-profile-picture', formData)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err, err.data)
        })
    }
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div>
            <input type = 'file' name = 'images' accept="image/jpeg, image/png" onChange = {handleChange}></input>
            <button onClick = {handleSubmit}>Submit</button>
        </div>
    )
}

export default ProfileUpdate
