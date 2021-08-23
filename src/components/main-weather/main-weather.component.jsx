import React from 'react'

import { weatherIds } from './weather-ids'

import partlyCloudy from '../../assets/partly-cloudy.png'
import cloudy from '../../assets/cloudy.png'
import sunny from '../../assets/sunny.png'
import moon from '../../assets/moon.png'
import thunderstorm from '../../assets/thunderstorm.png'
import thunderstormandrain from '../../assets/thunderstormandrain.png'
import rain from '../../assets/rain.png'
import snow from '../../assets/snow.png'
import haze from '../../assets/haze.png'
import tornado from '../../assets/tornado.png'

import './main-weather.styles.css'


const MainWeather = ({ location, current }) => {
    const date = new Date(current.dt * 1000)
    let hours = date.getHours()
    let timeOfDay = 'am'
    if (hours > 12) {
        timeOfDay = 'pm'
        hours = hours - 12
    }
    let minutes = date.getMinutes().toString()
    if (minutes.length === 1) {
        minutes = '0' + minutes
    }

    const currentWeatherId = current.weather[0].id

    const currentWeather = weatherIds[currentWeatherId]

    let currentImg

    if(current.dt >= current.sunset || current.dt < current.sunrise){
        currentImg = moon 
    } else {
        currentImg = sunny
    }
    if (currentWeatherId === 801) {
        console.log("how did i get here")
        currentImg = partlyCloudy
    } 
     if (currentWeatherId === 804) {
        currentImg = cloudy
    }
     if (currentWeatherId > 209 && currentWeatherId < 222) {
        currentImg = thunderstorm
    } 
    if (currentWeatherId > 199 && currentWeatherId < 233) {
        currentImg = thunderstormandrain
    }
     if (currentWeatherId > 299 && currentWeatherId < 532 ) {
        currentImg = rain 
    }
    if( currentWeatherId > 599 && currentWeatherId < 622) {
        currentImg = snow 
    } 
    if(currentWeatherId > 700 && currentWeatherId < 772) {
        currentImg = haze 
    }
    if(currentWeatherId === 781) {
        currentImg = tornado 
    }
    console.log(current.weather[0])

    return (
        <div className={`col-md-7 main-weather ${ current.dt >= current.sunset || current.dt < current.sunrise ?  'night-weather' : 'day-weather'}`}>
                <div className="location-temp">
                    <h3>{location.name}, {location.state}</h3>
                    <p>As of {hours}:{minutes} {timeOfDay}</p>
                    <p className="main-degrees">{Math.round(current.temp)}°</p>
                    <h4>{currentWeather}</h4>

                </div>
                <div className="img-high-low">
                    <img src={currentImg} />
                </div>
        </div>
    )
}

export default MainWeather