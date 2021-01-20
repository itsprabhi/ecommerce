import React, {useState} from 'react'
import Link from 'react-router-dom/Link'
import '../styles/navbar/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faShoppingBag, faIdBadge, faShoppingBasket, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import {logoutUser} from '../redux/actions/userActions'
import store from '../redux/store'
import {connect} from 'react-redux'




function Navbar(props) {

    const [navToggle,setNavToggle] = useState(false)

    const onNavToggle = () => {
        setNavToggle(!navToggle)
    }

    const onLogOut = () => {
        store.dispatch(logoutUser())
    }
        
    const adminBtn = props.isAdmin ? (
        <Link to = '/admin'>
            <li>
            <FontAwesomeIcon icon = {faPencilAlt} />
                Admin
            </li>
        </Link>
    ) : (<></>)

    const profileMenu = props.auth ? (
        <ul>
        <Link to = '/user'>
            <li>
            <FontAwesomeIcon icon = {faUser} />
                Profile
            </li>
        </Link>
        <Link to = '/user/cart'>
            <li>
            <FontAwesomeIcon icon = {faShoppingBasket} />
                Cart
            </li>
        </Link>
        {adminBtn}
        <li>
            <button onClick={onLogOut} className = 'nav-btn'>Log Out</button>
        </li>
    </ul>
    ) : (
        <>
            {/* <li><Link to = '/login'>
                
                    Login
                
            </Link></li> */}
            <li><Link to = '/login'>
            <FontAwesomeIcon icon = {faUser} />
                    Login / SignUp
            </Link></li>
        </>
    )

    const navbarProfile = props.loading ? (<>Loading...</>) : (
        <div className = 'nav-profile'>
        {/* <button className = 'nav-btn nav-btn-list'>
            <FontAwesomeIcon icon = {faUser} />
        </button> */}
        {profileMenu}
        </div>
    )

    const navListClasses = navToggle ? 'navbar navbar-on' : 'navbar'

    return (
        
        <div className = {navListClasses}>
            <div className = 'navbar-brand'>
                <Link to = '/'>
                    <h4>
                        BY Store
                    </h4>
                </Link>
                <span onClick = {onNavToggle} className = 'toggle-btn'></span>
            </div>

            

            <div className = 'navbar-list'>
                <ul>
                    <Link to = '/'>
                        <li>
                            <FontAwesomeIcon icon = {faHome} />
                            Home
                        </li>
                    </Link>
                    <Link to = '/shop'>
                        <li>
                            <FontAwesomeIcon icon = {faShoppingBag} />
                            Shop
                        </li>
                    </Link>
                    <Link to = '/about'>
                        <li>
                            <FontAwesomeIcon icon = {faIdBadge} />
                            About
                        </li>
                    </Link>
                    {profileMenu}
                </ul>
            </div>

            {/* <div className = 'navbar-profile'>
                {navbarProfile}
            </div> */}
            
        </div>
    
    )
        
}

const mapStateToProps = (state) => ({
    loading: state.user.loading,
    auth: state.user.authenticated,
    isAdmin: state.user.credentials.isAdmin
})

export default connect(mapStateToProps)(Navbar)
