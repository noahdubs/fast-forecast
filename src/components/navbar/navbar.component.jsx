import React from 'react'
import { connect } from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom'
import SearchBar from '../search-bar/search-bar.component'

import './navbar.styles.css'

import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import mobileLogo from '../../assets/mobile-logo.png'

const Navbar = ({page, currentUser}) => {

    return (
        <div className={`custom-navbar ${page ? 'home-navbar' : 'weather-navbar'}`}>
            <nav className={`navbar nav-custom mobile-nav`}>
                <div className="nav-logo nav-half">
                    <img id="logo1" src={logo1} />
                    <img id="logo2" src={logo2} />
                    <img id="mobile-logo" src={mobileLogo} />
                </div>
                <div className="nav-info nav-half">
                    {page ? <span></span>
                    : <SearchBar for="weather-nav" />}
                    {currentUser ? 
                        <i title="Sign Out" onClick={() => auth.signOut()} className="fas fa-sign-out-alt sign-in-out-icon"></i>
                        : <Link to="/signin"><i title="Sign In" className="fas fa-sign-in-alt sign-in-out-icon"></i></Link>
                    }
                </div>
            </nav>
        </div>
        
    )
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps, null)(Navbar)

