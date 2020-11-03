import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


function SignupForm(props) {

    const history = useHistory()

    const [user, setUser] = useState({
        userName:'',
        userEmail:'',
        userPassword:'',
        userConfirmPassword:'',
        userHandle:'',
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
            // console.log(res.data)
            setUser({loading:false})
            localStorage.setItem('FBIToken',`Bearer ${res.data.token}`)
            history.push('/user')
        })
        .catch(err => {
            console.log(err.response.data)
            setUser({
                ...user,
                loading:false,
                errors: err.response.data
            })
        })
    } 

    let nameHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.userName}</span>) : null
    let passwordHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.password}</span>) : null
    let errorHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.error}</span>) : null
    let emailHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.userEmail}</span>) : null
    let handleHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.userHandle}</span>) : null
    let confirmPasswordHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.userConfirmPassword}</span>) : null
   
    return (
        <div>
            <div className = 'signup-form'>
                <input type = 'text' name = 'userName' placeholder = 'Enter your name' onChange = {onHandleChange} /><br />
                {nameHelper} <br />
                <input type = 'email' name = 'userEmail' placeholder = 'Enter your email' onChange = {onHandleChange} /> <br />
                {emailHelper} <br />
                <input type = 'password' name = 'userPassword' placeholder = 'Enter your password' onChange = {onHandleChange} /> <br />
                {passwordHelper} <br />
                <input type = 'password' name = 'userConfirmPassword' placeholder = 'Confirm your password' onChange = {onHandleChange} /> <br />
                {confirmPasswordHelper} <br />
                <input type = 'text' name = 'userHandle' placeholder = 'Enter your username' onChange = {onHandleChange} /> <br />
                {handleHelper} <br/>
                <button className = 'primary-btn' onClick = {onSubmit}>
                    Sign Up!
                </button>
            </div>
        </div>
    )
}

export default SignupForm
