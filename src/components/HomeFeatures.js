import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

function HomeFeatures() {
    return (
        <div className = 'home-feature'>
            <div className = 'product-page-container'>
                <div className = 'home-feature-text'>
                    <h3>
                        Benefits of shopping with us
                    </h3>
                    <div className = 'home-feature-container'>
                        <div className = 'home-feature-card'>
                            <div className = 'home-feature-icon'>
                                <FontAwesomeIcon icon = {faDollarSign} />
                            </div>
                            <p>
                                We make sure the products you get are 100% authentic
                            </p>
                        </div>
                        <div className = 'home-feature-card'>
                            <div className = 'home-feature-icon'>
                                <FontAwesomeIcon icon = {faDollarSign} />
                            </div>
                            <p>
                                We make sure the products you get are 100% authentic
                            </p>
                        </div>
                        <div className = 'home-feature-card'>
                            <div className = 'home-feature-icon'>
                                <FontAwesomeIcon icon = {faDollarSign} />
                            </div>
                            <p>
                                We make sure the products you get are 100% authentic
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFeatures
