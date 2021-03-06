import React, { useState } from 'react'

import { Redirect } from 'react-router-dom'

import { FormInput } from '../form-input/form-input.component'
import CustomButton  from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

import './sign-in.styles.css'

const SignIn = () => {

    const [ info, setInfo ] = useState({
        email: '',
        password: ''
    })

    const handleChange = event => {
        const { name, value } = event.target 

        setInfo({ ...info, [ name ]: value })
    }

    const handleSubmit = async event => {
        const { email, password } = info
        event.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setInfo({email: '', password: ''})
        } catch(error) {
            console.log(error)
        }
        setInfo({email: '', password: ''})
    }   

    return (
        <div className="col-md-6 sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput  
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={info.email}
                    label="email"
                    classes="login-form-input"
                    placeholder="Email"
                    required
                />  
                <FormInput  
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={info.password}
                    label="email"
                    classes="login-form-input"
                    placeholder="Password"
                    required
                />
                <CustomButton type="submit"> Sign in </CustomButton>
                <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google <i className="fab fa-google google-icon"></i></CustomButton>
            </form>
        </div>
        
    ) 
}

export default SignIn 