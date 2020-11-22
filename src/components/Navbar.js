import React from 'react'
import Link from 'react-router-dom/Link'
import '../styles/navbar/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {logoutUser} from '../redux/actions/userActions'
import store from '../redux/store'
import {connect} from 'react-redux'




function Navbar(props) {

    const onLogOut = () => {
        store.dispatch(logoutUser())
    }
        
    const adminBtn = props.isAdmin ? (
        <Link to = '/admin'>
            <li>
                Admin
            </li>
        </Link>
    ) : (<></>)

    const profileMenu = props.auth ? (
        <ul>
        <Link to = '/user'>
            <li>
                Profile
            </li>
        </Link>
        <Link to = '/cart'>
            <li>
                Cart
            </li>
        </Link>
        {adminBtn}
        <li>
            <button onClick={onLogOut} className = 'nav-btn'>Log Out</button>
        </li>
    </ul>
    ) : (
        <ul>
            <Link to = '/login'>
                <li>
                    Login
                </li>
            </Link>
            <Link to = '/signup'>
                <li>
                    Signup
                </li>
            </Link>
        </ul>
    )

    const navbarProfile = props.loading ? (<>Loading...</>) : (
        <div className = 'nav-profile'>
        <button className = 'nav-btn nav-btn-list'>
            <FontAwesomeIcon icon = {faUser} />
        </button>
        {profileMenu}
        </div>
    )


    return (
        <div>
        <div className = 'navbar'>
            <div className = 'navbar-brand'>
                <Link to = '/'>
                    <b>
                        E-commerce
                    </b>
                </Link>
            </div>
            <div className = 'navbar-list'>
                <ul>
                    <Link to = '/'>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to = '/shop'>
                        <li>
                            Shop
                        </li>
                    </Link>
                    <Link to = '/about'>
                        <li>
                            About
                        </li>
                    </Link>
                </ul>
            </div>
            <div className = 'navbar-profile'>
                {navbarProfile}
            </div>
        </div>
    </div>
    )
        
}

const mapStateToProps = (state) => ({
    loading: state.user.loading,
    auth: state.user.authenticated,
    isAdmin: state.user.credentials.isAdmin
})

export default connect(mapStateToProps)(Navbar)
