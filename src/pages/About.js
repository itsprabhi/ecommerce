import React from 'react'
import img from '../imgs/about.png'

function About() {
    return (
        <div className = 'about-page'>
            <div className = 'about-page-img'>
                <img src = {img}></img>
            </div>
            <div className = 'about-page-txt'>
                <h2>About Us</h2>
                <h5>Let us introduce what we do</h5>
                <p>Hi there, we here at BY Store believe that technology is the biggest asset a person has. We work our hardest to provide you with the best gadgets in the market. We have a great collection of Air Conditioners, cameras, and smartphones. They are selected based on user rating, price, and performance. Our premium delivery makes sure that you get your products within three days of your order. </p>
                <p className  = 'website-note'>This e-commerce site is for demo purposes only. This website is only a sample in a web developer portfolio. We do not sell any items listed on the website. We will not be responsible for any purchases made.</p>
            </div>
        </div>
    )
}

export default About
