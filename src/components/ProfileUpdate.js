
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { LOADING_USER, SET_USER } from '../redux/types'

import '../styles/user/user.css'

function ProfileUpdate(props) {
    console.log(props.user.credentials)
    // deconstructing credentials
    const { userName, userHandle, profilePicture, userEmail} = props.user.credentials
    const {loading} = props.user
    const [data, setData] = useState([])

    const handleChange = (e) => {
        // set data
        setData([e.target.files[0]])
    }
    const handleSubmit = () => (dispatch) =>{
        dispatch({type:LOADING_USER})
        let formData = new FormData()
        formData.append('image', data[0])
        console.log('btn hit')
        axios.post('/user/upload-profile-picture', formData)
        .then(res => {
            dispatch({type: SET_USER})
            console.log(res.data)
        })
        .catch(err => {
            console.log(err, err.data)
        })
    }
    useEffect(() => {
        console.log(data)
    }, [data])

    const profileMarkup = !loading ? (
        <div className = 'profile'> 
            <div className = 'profile-img'>
                <img src = {profilePicture} alt = 'profile pic' />
            </div>
            <h4>@{userHandle}</h4>
            <h4>Name: {userName}</h4>
            <h4>Email: {userEmail}</h4>
            <input type = 'file' name = 'images' accept="image/jpeg, image/png" onChange = {handleChange}></input>
            <button onClick = {() => handleSubmit()}>Submit</button>
        </div>
    ) : (
        <p>Loading....</p>
    )
    return (
    <>{profileMarkup}</>
    )
}



export default ProfileUpdate
