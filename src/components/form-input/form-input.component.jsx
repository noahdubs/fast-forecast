import React from 'react'
import './form-input.styles.css'

export const FormInput = ({ label, handleChange, type, ...otherProps }) => (
        <input className={`form-input ${type ? type : ''}`} onChange={handleChange} {...otherProps} />
)