import React, { useState }  from 'react'
import { connect } from 'react-redux'

import './weather.styles.css'

import Navbar from '../../components/navbar/navbar.component'
import WeatherCollection from '../../components/weather-collection/weather-collection.component'

const Weather = props => {
    const [coords, setCoords] = useState()
    const {hexLat, hexLon} = props.match.params 
    const lat = parseInt(hexLat, 16)
    const lon = parseInt(hexLon, 16)
    console.log(lat, lon)
    return (
        <div className="weather">
            <Navbar />
            <WeatherCollection 
                lat={lat}
            />
                
            {
            // footer
            }
        </div>
    )
}

export default Weather 