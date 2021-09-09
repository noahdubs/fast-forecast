import React from 'react'

import { weatherIds } from './weather-ids'

import { getTime } from '../../scripts/get-time'
import { getCardinal } from '../../scripts/get-cardinal'

import { getMainImg } from '../../scripts/get-img'

import './main-weather.styles.css'


const MainWeather = ({ location, current }) => {
    console.log(current)
    const {hours, minutes, timeOfDay} = getTime(current.dt)
    console.log(hours)
    const currentWeatherId = current.weather[0].id
    current.currentWeatherId = currentWeatherId 
    const currentWeather = weatherIds[currentWeatherId]


    return (
        <div className={`row main-weather ${ current.dt >= current.sunset || current.dt < current.sunrise ?  'night-weather' : 'day-weather'}`}>
                <div className="col-md-5 location-temp">
                    <h3>{location.name}, {location.state ? location.state : location.country}</h3>
                    <p>As of {hours}:{minutes} {timeOfDay}</p>
                    <p className="main-degrees">{Math.round(current.temp)}°</p>
                    <h4>{currentWeather}</h4>

                </div>
                <div className="col-md-3 img-info">
                    <img src={getMainImg(current)} />
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