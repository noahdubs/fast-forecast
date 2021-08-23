import React, { useEffect }  from 'react'
import { connect } from 'react-redux'

import './weather.styles.css'

import Navbar from '../../components/navbar/navbar.component'
import WeatherCollection from '../../components/weather-collection/weather-collection.component'

const Weather = () => {
    return (
        <div className="weather">
            <Navbar />
            <WeatherCollection />
                
            {
            // footer
            }
        </div>
    )
}

export default Weather 