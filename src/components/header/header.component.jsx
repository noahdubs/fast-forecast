import React from 'react'

import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'

import './header.styles.css'

const Header = () => (
    <div className="header">
        <div className="sign-out-btn" onClick={() => auth.signOut()} >
            Sign Out 
        </div>
    </div>
)

export default Header 