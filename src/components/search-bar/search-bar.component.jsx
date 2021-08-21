import React, {useState} from 'react'
import './search-bar.styles.css'

import { FormInput } from '../form-input/form-input.component'

const SearchBar = props => {
    const [search, setSearch] = useState({text: ''})

    const handleChange = event => {
        const { name, value } = event.target 

        setSearch({...search, [name]:value})
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <form className="search-form form-inline" onSubmit={handleSubmit} >
            <div className="form-group">
                <FormInput 
                    name="text"
                    type="text"
                    onChange={handleChange}
                    value={search.text}
                    type={props.for}
                    required
                />
                <button className="search-button">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </form>
    )
    
}

export default SearchBar 