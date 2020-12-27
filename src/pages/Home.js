import React from 'react'
import HomeFeatures from '../components/HomeFeatures'
import HomeGrid from '../components/HomeGrid'
import HomeShop from '../components/HomeShop'

function Home() {
    return (
        <div className = 'product-page-container'>
            <div className = 'heading-banner'>
                <div className = 'heading-banner-text'>
                    <h1>

                    </h1>
                </div>
            </div>
            <HomeShop />
            <HomeGrid />
            <HomeFeatures />
        </div>
    )
}

export default Home
