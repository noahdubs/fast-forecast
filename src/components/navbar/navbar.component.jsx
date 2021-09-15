import React from 'react'
import { connect } from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom'
import SearchBar from '../search-bar/search-bar.component'

import './navbar.styles.css'

const Navbar = ({page, currentUser}) => {
    return (
        <div className={`custom-navbar ${page ? 'home-navbar' : 'weather-navbar'}`}>
            <nav className={`navbar navbar-expand-md nav-custom`}>
                <div className="nav-logo nav-half">
                    logo
                </div>
                <div className="nav-info nav-half">
                    {page ? null 
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

