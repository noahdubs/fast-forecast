import React from 'react'

import './hourly-weather.styles.css'

import { getImg } from '../../scripts/get-img'

const HourlyWeather = ({hourly, nightTime, sunrise, sunset, dayOfWeekId}) => {
    console.log(hourly) 

    return (
        <div className=" hourly-weather">
            <div className="hourly-scroll" id="hourly-scroll">
                {hourly.map(hour => (
                    <div className="hour-of-weather" key={hour.dt} >
                        <p>{hour.time.hours}{hour.time.timeOfDay}</p>
                        {getImg(hour, sunset, sunrise, nightTime, dayOfWeekId)}
                        <p>{Math.round(hour.temp)}</p>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default HourlyWeather