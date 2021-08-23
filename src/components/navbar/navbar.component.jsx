import React from 'react'
import SearchBar from '../search-bar/search-bar.component'

import './navbar.styles.css'

const Navbar = () => {
    return (
        <div className="custom-navbar">
            <nav className="navbar navbar-expand-md nav-custom">
                <div className="nav-logo nav-half">
                    logo
                </div>
                <div className="nav-info nav-half">
                    <SearchBar for="weather-nav" />
                </div>

            </nav>
        </div>
        
    )
}

export default Navbar 