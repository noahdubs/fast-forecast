import React from 'react'
import { Field } from 'redux-form'

export const FormInput = ({ label, formName, ...otherProps }) => (
    <div className='group'>
        <input className="form-input" {...otherProps} />
        {label ? (
            <label
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label>
            ) : null
        }
    </div>
)