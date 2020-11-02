import React, {useState} from 'react'
// import { useHistory } from 'react-router'
import axios from 'axios'
import '../styles/signup/signup.css'
import {useHistory} from 'react-router-dom'



function SignupForm(props) {

    const history = useHistory()

    const [user, setUser] = useState({
        userEmail:'',
        userPassword:'',
        loading:false
    })

    const onHandleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    

    const onSubmit = () => {
        console.log(user)
        setUser({
            ...user,
            loading: true
        })
        const { userName, userEmail, userPassword, userConfirmPassword, userHandle } = user
        const newUser = {
            userEmail,
            userPassword
        }
        axios.post('/login',newUser)
        .then(res => {
            console.log(res.data)
            setUser({loading:false})
            history.push('/')
        })
        .catch(err => {
            if(!err.response){
                return
            }
            setUser({
                ...user,
                loading:false,
                errors: err.response.data
            })
        })
    } 

    
    let emailHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.userEmail}</span>) : null
    let passwordHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.password}</span>) : null
    let errorHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.error}</span>) : null
    return (
        
        <div>
            <div className = 'signup-form'>
                <label>Enter your Email</label> 
                <input type = 'email' name = 'userEmail' placeholder = 'abc@xyz.com' onChange = {onHandleChange} /> <br />
                {emailHelper} <br />
                <label>Enter your Password</label> 
                <input type = 'password' name = 'userPassword' placeholder = '********' onChange = {onHandleChange} /> <br />
                {passwordHelper} <br />
                {errorHelper}
                <button className = 'primary-btn' onClick = {onSubmit}>
                    Log In!
                </button>
            </div>
        </div>
    )
}

export default SignupForm
