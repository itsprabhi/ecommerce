
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { LOADING_USER, SET_USER, SET_UI } from '../redux/types'

import '../styles/user/user.css'


const ProfileInfoUpdate = (props) => {
    
    const onProfileEdit = props.onProfileEdit
    const handleSubmit = props.handleSubmit
    const handleChange = props.handleChange
    const onHandleChange = () => {

    }


    return (
        <div className = 'profile-info-update'>
            <h4>Edit your profile</h4>
            <form>
                <label>Enter your First Name</label> 
                <input type = 'text' name = 'firstName' className = 'text-name' placeholder = 'Enter your first name' onChange = {onHandleChange} />
                <label>Enter your Last Name</label>
                <input type = 'text' name = 'lastName'  className = 'text-name' placeholder = 'Enter your last name' onChange = {onHandleChange} /><br />
                <label>Enter your Email</label>
                <input type = 'email' name = 'userEmail' placeholder = 'Enter your email' onChange = {onHandleChange} /> <br />
                <label>Enter your Address</label><br />
                <input onChange = {onHandleChange} type = 'text' name = 'address' placeholder = 'Enter Address'></input><br/>
                <input onChange = {onHandleChange} type = 'text' name = 'city' placeholder = 'Enter City'></input>
                <input onChange = {onHandleChange} type = 'text' name = 'postalCode' placeholder = 'Enter Postal Code'></input><br/>
                <input onChange = {onHandleChange} type = 'text' name = 'country' placeholder = 'Enter Country'></input><br />
                <input type = 'file' name = 'images' accept="image/jpeg, image/png" onChange = {handleChange}></input>
                <button onClick = {() => handleSubmit()}>Upload Image</button> <br />
                <button onClick = {onProfileEdit}>Change</button>
            </form>
        </div>
    )
}

function ProfileUpdate(props) {
    // console.log(props.user.credentials)
    // deconstructing credentials
    const { userName, userHandle, profilePicture, userEmail} = props.user.credentials
    const {loading} = props.user
    const [data, setData] = useState([])
    const [isProfileEdit, SetIsProfileChange] = useState(false)

    const handleChange = (e) => {
        // set data
        setData([e.target.files[0]])
    }
    const handleSubmit = () => (dispatch) =>{
        dispatch({type:LOADING_USER})
        let formData = new FormData()
        formData.append('image', data[0])
        // console.log('btn hit')
        axios.post('/user/upload-profile-picture', formData)
        .then(res => {
            dispatch({type: SET_USER})
            dispatch({type: SET_UI})
            // console.log(res.data)
        })
        .catch(err => {
            console.log(err, err.data)
        })
    }
    useEffect(() => {
        // console.log(data)
    }, [data])

    const onProfileEdit = () => {
        if(isProfileEdit === true){
            SetIsProfileChange(false)
        }
        if(isProfileEdit === false){
            SetIsProfileChange(true)
        }
    }

    const profileMarkup = !loading ? (
        <div className = 'profile'> 
            <div>
            <div className = 'profile-img'>
                <img src = {profilePicture} alt = 'profile pic' />
                <div className = ''>
                    <h5>Hello, {userName}</h5>
                    <p>@{userHandle}</p>
                    <p>Email:   {   userEmail}</p>
                </div>
            </div>  
            <div className = 'profile-edit-btn'>
                <button className = 'buy-btn' onClick = {onProfileEdit}>Update your Profile</button>
            </div>
           
            {/*  */}
            </div>
        </div>
    ) : (
        <p>Loading....</p>
    )
    return (
    <>
    {isProfileEdit ? <ProfileInfoUpdate isProfileEditing = {isProfileEdit} onProfileEdit = {onProfileEdit} handleSubmit = {handleSubmit} handleChange = {handleChange}/> : (<></>)}
    {profileMarkup}
    </>
    )
}



export default ProfileUpdate
