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

import getTime from '../../scripts/get-time'
import { getCardinal } from '../../scripts/get-cardinal'

import './main-weather.styles.css'


const MainWeather = ({ location, current }) => {

    const {hours, minutes, timeOfDay} = getTime(current.dt)
    console.log(hours)
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
        <div className={`row main-weather ${ current.dt >= current.sunset || current.dt < current.sunrise ?  'night-weather' : 'day-weather'}`}>
                <div className="col-md-5 location-temp">
                    <h3>{location.name}, {location.state}</h3>
                    <p>As of {hours}:{minutes} {timeOfDay}</p>
                    <p className="main-degrees">{Math.round(current.temp)}°</p>
                    <h4>{currentWeather}</h4>

                </div>
                <div className="col-md-3 img-info">
                    <img src={currentImg} />
                    <div className="main-weather-info">
                        <p className="m-w-p">Feels like {Math.round(current.feels_like)}°</p>  
                        <p className="m-w-p">Humidity: {current.humidity}%</p>
                        <p className="m-w-p">Wind: {Math.round(current.wind_speed)} mph {getCardinal(current.wind_ang)}</p>
                    </div>
                </div>
        </div>
    )
}

export default MainWeather