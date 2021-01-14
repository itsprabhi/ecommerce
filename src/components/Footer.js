import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className = 'footer'>
            <div className = 'footer-txt-content'>
                <div className = 'footer-intro'>
                    <h5>BY Store</h5>
                    <p>BY Store believe that technology is the biggest asset a person has. We work our hardest to provide you with the best gadgets in the market. We have a great collection of Air Conditioners, cameras, and smartphones.</p>
                </div>
                <div className = 'footer-menu'>
                    <div>
                    <h5>Menu</h5>
                    <ul>
                        <li>
                            <Link to = ''>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to = '/shop'>
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to = '/user'>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to = '/about'>
                                About
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className = 'footer-products'>
                   <div>
                    <h5>Product Brands</h5>
                        <ul>
                            <li>
                                <Link to = '/shop/brand/samsung'>
                                    Samsung
                                </Link>
                            </li>
                            <li>
                                <Link to = '/shop/brand/lg'>
                                    LG
                                </Link>
                            </li>
                            <li>
                                <Link to = '/shop/brand/panasonic'>
                                    Panasonic
                                </Link>
                            </li>
                        </ul>
                   </div>
                   <div>
                    <h5>Product Categories</h5>
                        <ul>
                            <li>
                                <Link to = '/shop/category/cameras'>
                                    Cameras
                                </Link>
                            </li>
                            <li>
                                <Link to = '/shop/category/smartphones'>
                                    Smartphones
                                </Link>
                            </li>
                            <li>
                                <Link to = '/shop/category/airconditioners'>
                                    Air Conditioners
                                </Link>
                            </li>
                        </ul>
                   </div>
                </div>
            </div>
            <div className = 'footer-copyrights'>
                <p>Copyrights @2021. All rights reserved </p>
            </div>
        </div>
    )
}

export default Footer
