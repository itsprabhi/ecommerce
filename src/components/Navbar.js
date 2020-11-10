import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import '../styles/navbar/navbar.css'


export class Navbar extends Component {
    render() {
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
                <div className = 'navbar-list navbar-profile'>
                    <ul>
                        <li>
                           User
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Navbar
