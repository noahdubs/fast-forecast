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
    console.log(current)

    const date = new Date(current.dt * 1000)
    let hours = date.getHours()
    let timeOfDay = 'am'
    if (hours > 12) {
        timeOfDay = 'pm'
        hours = hours - 12
    }
    let minutes = date.getMinutes().toString()
    console.log(typeof minutes)
    if (minutes.length === 1) {

        minutes = '0' + minutes
    }


    const currentWeatherId = current.weather[0].id
    console.log(typeof currentWeatherId)

    const currentWeather = weatherIds[currentWeatherId]

    console.log(current)

    let currentImg
    if(current.dt >= current.sunset || current.dt < current.sunrise){
        currentImg = moon 
    } 
    if (currentWeatherId === 801 || 802 || 803) {
        currentImg = partlyCloudy
    } 
     if (currentWeatherId === 804) {
        currentImg = cloudy
    }
     if (currentWeatherId === 800) {
        currentImg = sunny
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
    console.log(currentWeatherId)

    return (
        <div className="col-md-8 main-weather">
            <div className="me-2">
                <div className="location-temp">
                    <h1>{location.name}, {location.state}</h1>
                    <p>As of {hours}:{minutes} {timeOfDay}</p>
                    <p>{Math.round(current.temp)} Degrees</p>
                    <p>{currentWeather}</p>

                </div>
                <div className="img-high-low">
                    <img src={currentImg} />
                    
                </div>
            </div>
            
        </div>
    )
}

export default MainWeather