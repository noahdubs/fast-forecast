import React from 'react'
import './form-input.styles.css'

export const FormInput = ({ label, handleChange, classes, ...otherProps }) => (
        <input className={`form-input ${classes ? classes : ''}`} onChange={handleChange} {...otherProps} />
)