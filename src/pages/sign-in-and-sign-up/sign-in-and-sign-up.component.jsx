import React from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import Navbar from '../../components/navbar/navbar.component'
import Footer from '../../components/footer/footer.component'

import './sign-in-and-sign-up.styles.css'

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <Navbar />
        <div className="row sign-in-row">
            <SignIn />
            <SignUp />
        </div>
        <Footer />
    </div>
)

export default SignInAndSignUp
