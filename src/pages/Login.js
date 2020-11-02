import React from 'react'
import LoginForm from '../components/LoginForm'
import '../styles/signup/signupPage.css'
function Login() {
    return (
        <div className = 'signup-content'>
            <div>
                <div className = 'signup-heading'>
                    <h1>Login</h1>
                    <p>Happy to see you back</p>
                </div>
                <div className = 'login-form'>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login
