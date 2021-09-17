import React from 'react'

import './weather.styles.css'

import Navbar from '../../components/navbar/navbar.component'
import WeatherCollection from '../../components/weather-collection/weather-collection.component'
import Footer from '../../components/footer/footer.component'

const Weather = ({lat, lon}) => {   
    return (
        <div className="weather">
            <Navbar />
            <WeatherCollection 
                lat={lat}
                lon={lon}
            />
            <Footer />
        </div>
    )
}

export default Weather 