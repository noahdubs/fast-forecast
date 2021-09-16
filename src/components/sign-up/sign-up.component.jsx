import React, { useState } from 'react'
import './sign-up.styles.css'

import { FormInput } from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const SignUp = () => {
    const [ info, setInfo ] = useState({
        email: '',
        displayName: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = event => {
        const { name, value } = event.target 

        setInfo({
            ...info, [ name ] : value 
        })
    }

    const handleSubmit = async event => {
        event.preventDefault()

        const { email, password, confirmPassword, displayName } = info 

        if(password !== confirmPassword) {
            alert("Passwords don't match")
            return 
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            setInfo({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="col-lg-6 sign-up">
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type='email'
                    name='email'
                    value={info.email}
                    onChange={handleChange}
                    label='Email'
                    type="login-form-input"
                    placeholder="Email"
                    required
                />
                 <FormInput 
                    type='text'
                    name='displayName'
                    value={info.displayName}
                    onChange={handleChange}
                    label='Name'
                    type="login-form-input"
                    placeholder="Display Name"
                    required
                />
                 <FormInput 
                    type='password'
                    name='password'
                    value={info.password}
                    onChange={handleChange}
                    label='Password'
                    type="login-form-input"
                    placeholder="Password"
                    required
                />
                 <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={info.confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    type="login-form-input"
                    placeholder="Confirm Password"
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp 