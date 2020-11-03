import React from 'react'

import SignupForm from '../components/SignupForm'
import '../styles/signup/signupPage.css'
function Signup() {
    return (
        <div className = 'signup-content'>
            <div>
                <div className = 'signup-heading'>
                    <h1>Signup</h1>
                    <p>Happy to see you back</p>
                </div>
                <div className = 'login-form'>
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}

export default Signup
