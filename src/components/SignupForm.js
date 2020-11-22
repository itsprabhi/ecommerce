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
                <input type = 'text' name = 'firstName' placeholder = 'Enter your first name' onChange = {onHandleChange} /><br />
                {nameHelper} <br />
                <input type = 'text' name = 'lastName' placeholder = 'Enter your last name' onChange = {onHandleChange} /><br />
                {nameHelper} <br />
                <input type = 'email' name = 'userEmail' placeholder = 'Enter your email' onChange = {onHandleChange} /> <br />
                {emailHelper} <br />
                <input type = 'password' name = 'userPassword' placeholder = 'Enter your password' onChange = {onHandleChange} /> <br />
                {passwordHelper} <br />
                <input type = 'password' name = 'userConfirmPassword' placeholder = 'Confirm your password' onChange = {onHandleChange} /> <br />
                {confirmPasswordHelper} <br />
                <input type = 'text' name = 'userHandle' placeholder = 'Enter your username' onChange = {onHandleChange} /> <br />
                {handleHelper} <br/>
                {errorHelper} <br />
                <button className = 'primary-btn' onClick = {onSubmit}>
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

