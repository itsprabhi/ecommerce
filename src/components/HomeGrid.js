import React from 'react'
import { Link } from 'react-router-dom'

function HomeGrid() {
    return (
        <div className = 'product-page-container'>
            <div className = 'home-grid'>
                <div className = 'home-grid-box home-grid-box-one'>
                    <div className = 'home-grid-box-filter'></div>
                    <h4>
                        <Link to = ''>
                        See our special list of the best air conditioners in the market.
                        </Link>
                    </h4>
                </div>
                <div className = 'home-grid-box home-grid-box-two'>
                <div className = 'home-grid-box-filter'></div>
                    <h4>
                        <Link to = ''>
                            Check out the collection of cameras that will change the game for you.
                        </Link>
                    </h4>
                </div>
                <div className = 'home-grid-box home-grid-box-three'>
                <div className = 'home-grid-box-filter'></div>
                    <h4>
                        <Link to = ''>
                    Stay ahead of others with our collection of the latest smartphones.
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default HomeGrid
