import React from 'react'

import MainWeather from '../main-weather/main-weather.component'
import SidePanel from '../side-panel/side-panel.component'

import './weather-collection.styles.css'

const WeatherCollection = props => (
    <div className="weather-collection container">
        <div className="row weather-row">
            <MainWeather />
            <SidePanel />
        </div>
        <div className="row">
            {
            // 'hourly forcast, sidePanel'}
            }
        </div>
        <div className="row"> 
            {
            //'daily forecase, side panel'
            }
        </div>
    </div>
) 

export default WeatherCollection