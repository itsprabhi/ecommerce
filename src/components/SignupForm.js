import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {signupUser} from '../redux/actions/userActions'
import { connect } from 'react-redux'

function SignupForm(props) {

    const history = useHistory()

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        userEmail:'',
        userPassword:'',
        userConfirmPassword:'',
        userHandle:'',
        errors: {}
    })

    useEffect(() => {
        console.log(props.ui)
        if(props.ui.errors){
            setUser({
                ...user,
                errors: props.ui.errors
            })
        }
    }, [props.ui])

    const onHandleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = () => {
        const { firstName, lastName, userEmail, userPassword, userConfirmPassword, userHandle } = user
        const newUser = {
            firstName,
            lastName,
            userEmail,
            userPassword,
            userConfirmPassword,
            userHandle
        }
        props.signupUser(newUser, history)
    } 

    // Helper Text for form

    let nameHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.userName}</span>) : null
    let passwordHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.password}</span>) : null
    let errorHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.error}</span>) : null
    let emailHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.userEmail}</span>) : null
    let handleHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.userHandle}</span>) : null
    let confirmPasswordHelper = user.errors ? ( <span class = 'helper-text'>{user.errors.userConfirmPassword}</span>) : null
   
    return (
        <div>
            <div className = 'signup-form'>
                <label>Enter your First Name</label> 
                <input type = 'text' name = 'firstName' className = 'text-name' placeholder = 'Enter your first name' onChange = {onHandleChange} />
                {nameHelper} <br />
                <label>Enter your Last Name</label>
                <input type = 'text' name = 'lastName'  className = 'text-name' placeholder = 'Enter your last name' onChange = {onHandleChange} /><br />
                {nameHelper} <br />
                <label>Enter your Email</label>
                <input type = 'email' name = 'userEmail' placeholder = 'Enter your email' onChange = {onHandleChange} /> <br />
                {emailHelper} <br />
                <label>Enter your Password</label>
                <input type = 'password' name = 'userPassword' placeholder = 'Enter your password' onChange = {onHandleChange} /> <br />
                {passwordHelper} <br />
                <label>Confirm your Password</label>
                <input type = 'password' name = 'userConfirmPassword' placeholder = 'Confirm your password' onChange = {onHandleChange} /> <br />
                {confirmPasswordHelper} <br />
                <label>Enter your Username</label>
                <input type = 'text' name = 'userHandle' placeholder = 'Enter your username' onChange = {onHandleChange} /> <br />
                {handleHelper} <br/>
                {errorHelper} <br />
                <button className = 'primary-btn buy-btn' onClick = {onSubmit}>
                    Sign Up!
                </button>
            </div>
        </div>
    )
}


// it puts the global state to props of the component
const mapStateToProps = (state) => ({
    user: state.user,
    ui: state.ui
})

//it puts the actions to props
const mapActionsToProps = {
    signupUser
}

export default connect(mapStateToProps, mapActionsToProps)(SignupForm)

