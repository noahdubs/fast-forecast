import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import './homepage.styles.css'

const HomePage = () => {
    return (
        <div className="homepage">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default HomePage 
