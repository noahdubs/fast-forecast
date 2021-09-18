import React from 'react'

import './weather-search.styles.css'

import Navbar from '../../components/navbar/navbar.component'
import WeatherCollection from '../../components/weather-collection/weather-collection.component'
import Footer from '../../components/footer/footer.component'


const WeatherSearch = props => {
    console.log(props)
    const {hexLat, hexLon} = props.match.params 

    return (
        <div className="weather-search">
            <Navbar 
                lat={hexLat}
                lon={hexLon}
            />
            <WeatherCollection 
                lat={hexLat}
                lon={hexLon}
            />
            <Footer />
        </div>
    )
}

export default WeatherSearch 