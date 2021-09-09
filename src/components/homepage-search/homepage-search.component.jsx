import React from 'react'
import SearchBar from '../search-bar/search-bar.component'

import './homepage-search.styles.css'

const HomepageSearch = props => {
    return (
        <div className="homepage-search">
            <div>
                <h3 className="homepage-title">Find out the weather, anywhere in the world</h3>
                <SearchBar 
                    for={'homepage-search-bar'}
                />
            </div>
        </div>
    )
}

export default HomepageSearch 