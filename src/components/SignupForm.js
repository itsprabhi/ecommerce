import React, {useState} from 'react'
// import { useHistory } from 'react-router'
import axios from 'axios'


function SignupForm(props) {

    const [user, setUser] = useState({
        userName:'',
        userEmail:'',
        userPassword:'',
        userConfirmPassword:'',
        userHandle:'',
        errors:{},
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
            userName,
            userEmail,
            userPassword,
            userConfirmPassword,
            userHandle
        }
        axios.post('/signup',newUser)
        .then(res => {
            console.log(res.data)
            setUser({loading:false})
            // useHistory.
        })
        .catch(err => {
            console.log(err)
            setUser({
                ...user,
                loading:false,
                errors: err.response.data.errors
            })
        })
    } 
    return (
        <div>
            <div className = 'signup-form'>
                <input type = 'text' name = 'userName' placeholder = 'Enter your name' onChange = {onHandleChange} />
                <input type = 'email' name = 'userEmail' placeholder = 'Enter your email' onChange = {onHandleChange} />
                <input type = 'password' name = 'userPassword' placeholder = 'Enter your password' onChange = {onHandleChange} />
                <input type = 'password' name = 'userConfirmPassword' placeholder = 'Confirm your password' onChange = {onHandleChange} />
                <input type = 'text' name = 'userHandle' placeholder = 'Enter your username' onChange = {onHandleChange} />
                <button className = 'primary-btn' onClick = {onSubmit}>
                    Sign Up!
                </button>
            </div>
        </div>
    )
}

export default SignupForm
