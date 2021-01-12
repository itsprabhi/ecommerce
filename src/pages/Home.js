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
                        Get the best deals on your favorite tech gadgets.
                    </h1>
                    <div className = 'heading-banner-backgorund'></div>
                    
                </div>
            </div>
            <HomeShop />
            <HomeGrid />
            <HomeFeatures />
            <p className  = 'website-note'>This e-commerce site is for demo purposes only. This website is only a sample in a web developer portfolio. We do not sell any items listed on the website. We will not be responsible for any purchases made.</p>
        </div>
    )
}

export default Home
