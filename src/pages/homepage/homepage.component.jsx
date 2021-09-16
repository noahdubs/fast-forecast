import React from 'react'

import './homepage.styles.css'

import Navbar from '../../components/navbar/navbar.component'
import HomepageSearch from '../../components/homepage-search/homepage-search.component'


const HomePage = () => (
    <div className="homepage" id="animate-area">
            <Navbar
                page="homepage-nav"
            />
            <HomepageSearch />
    </div>
)

export default HomePage 
