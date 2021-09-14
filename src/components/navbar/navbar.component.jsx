import React from 'react'
import { connect } from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom'
import SearchBar from '../search-bar/search-bar.component'

import './navbar.styles.css'

const Navbar = ({page, currentUser}) => {
    return (
        <div className={`custom-navbar`}>
            <nav className={`navbar navbar-expand-md nav-custom ${page}`}>
                <div className="nav-logo nav-half">
                    logo
                </div>
                <div className="nav-info nav-half">
                    {page ? null 
                    : <SearchBar for="weather-nav" />}
                    {currentUser ? 
                         <div className='option' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                        : <Link to="/signin">Sign In</Link>
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

