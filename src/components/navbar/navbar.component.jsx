import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../search-bar/search-bar.component'

import './navbar.styles.css'

const Navbar = ({page}) => {
    return (
        <div className={`custom-navbar`}>
            <nav className={`navbar navbar-expand-md nav-custom ${page}`}>
                <div className="nav-logo nav-half">
                    logo
                </div>
                <div className="nav-info nav-half">
                    {page ? null 
                    : <SearchBar for="weather-nav" />}
                    <Link to="/signin">Sign In</Link>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar 