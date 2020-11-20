
import axios from 'axios'
import React, {useState, useEffect} from 'react'

import '../styles/user/user.css'

function ProfileUpdate(props) {
    console.log(props.user.credentials)
    // deconstructing credentials
    const { userName, userHandle, profilePicture, userEmail} = props.user.credentials

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
        <div className = 'profile'>
            
            <div className = 'profile-img'>
                <img src = {profilePicture} alt = 'profile pic' />
            </div>
            <h4>@{userHandle}</h4>
            <h4>Name: {userName}</h4>
            <h4>Email: {userEmail}</h4>
            
            <input type = 'file' name = 'images' accept="image/jpeg, image/png" onChange = {handleChange}></input>
            <button onClick = {handleSubmit}>Submit</button>
        </div>
    )
}



export default ProfileUpdate
