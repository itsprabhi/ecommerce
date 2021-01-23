import React, {useEffect, useState} from 'react'
import '../styles/signup/signup.css'

// redux stuff
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/userActions'


function LoginForm(props) {

    const history = useHistory()

    const [user, setUser] = useState({
        userEmail:'',
        userPassword:''
    })

    useEffect(() => {
        // console.log(props.ui)
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
        const { userEmail, userPassword } = user
        const userData = {
            userEmail,
            userPassword
        }
        props.loginUser(userData, history) // we can pass it as props becuase we did mapActionsToProps below 
    } 

    // helper text for form
    let emailHelper = user.errors ? ( <span className = 'helper-text'>{user.errors.userEmail}</span>) : null
    let passwordHelper = user.errors ? ( <span className = 'helper-text'>{user.errors.password}</span>) : null
    let errorHelper = user.errors ? ( <span className = 'helper-text'>{user.errors.error}</span>) : null

    
    return (
        
        <div>
            <div className = 'signup-form'>
                <label>Enter your Email</label> 
                <input type = 'email' name = 'userEmail' placeholder = 'abc@xyz.com' onChange = {onHandleChange} /> <br />
                {emailHelper} <br />
                <label>Enter your Password</label> 
                <input type = 'password' name = 'userPassword' placeholder = '********' onChange = {onHandleChange} /> <br />
                {passwordHelper} <br />
                {errorHelper} <br />
                <button className = 'primary-btn buy-btn' onClick = {onSubmit}>
                    Log In!
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
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(LoginForm)
