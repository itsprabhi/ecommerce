import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import '../styles/signup/signupPage.css'
function Login() {
    return (
        <div className = 'signup-content'>
            <div>
                <div className = 'signup-heading'>
                    <h2>Login</h2>
                    <p>Happy to see you back!</p>
                </div>
                <div className = 'login-form'>
                    <LoginForm />
                </div>
                <div class = 'login-redirect'>
                    <p>New User?      <Link to = '/signup'>Sign up now </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
