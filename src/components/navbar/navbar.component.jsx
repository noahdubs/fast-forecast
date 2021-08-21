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
            <nav className="navbar navbar-expand-md bottom-nav">
                <div className="nav-current-weather">
                    <p className="nav-weathers">Round Rock 83</p>
                </div>
                <div className="nav-saved-weather">
                    <p className="nav-weathers">weather 84</p>
                    <p className="nav-weathers">weather 84</p>
                    <p className="nav-weathers">weather 84</p>
                    <p className="nav-weathers">weather 84</p>
                    <p className="nav-weathers">weather 84</p>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar 