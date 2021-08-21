import React from 'react'

export const FormInput = ({ label, handleChange, type, ...otherProps }) => (
        <input className={`form-input ${type ? type : ''}`} onChange={handleChange} {...otherProps} />
)