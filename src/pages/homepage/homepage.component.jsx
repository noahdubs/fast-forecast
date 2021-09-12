import React from 'react'

import './homepage.styles.css'

import Navbar from '../../components/navbar/navbar.component'
import HomepageSearch from '../../components/homepage-search/homepage-search.component'

const HomePage = () => {
    return (
        <div className="homepage">
                <Navbar
                    page="homepage-nav"
                />
                <HomepageSearch />
        </div>
    )
}

export default HomePage 
