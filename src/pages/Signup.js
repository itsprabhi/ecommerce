import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../components/SignupForm'
import '../styles/signup/signupPage.css'
function Signup() {
    return (
        <div className = 'signup-content'>
            <div>
                <div className = 'signup-heading'>
                    <h2>Signup</h2>
                    <p>Happy to see you back</p>
                </div>
                <div className = 'login-form'>
                    <SignupForm />
                </div>
                <div class = 'login-redirect'>
                    <p>Already a User?      <Link to = '/login'>Login now </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup
