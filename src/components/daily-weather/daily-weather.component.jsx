import React from 'react'

import './daily-weather.styles.css'

import { getDayOfWeek } from '../../scripts/get-time.js'
import { getDailyImg } from '../../scripts/get-img'

import raindrop from '../../assets/raindrop.png'

const DailyWeather = ({daily, nightTime}) => {
    console.log(daily)
    const date = new Date(daily[0].dt * 1000)
    const dayOfWeek = getDayOfWeek(date)
    
    return (
        <div className={ `daily-weather${nightTime ? ' daily-nightime' : ' daily-daytime'}`} >
            <div className="col-md-12">
                {daily.map(day => (
                    <div className="day-of-week">
                        <div className="col-3 day-day">
                            <p>{getDayOfWeek(day.dt)}</p>
                        </div>
                        <div className="col-6 day-imgs">
                            {getDailyImg(day.weather[0].id)}
                            <img className="day-rain-img" src={raindrop} />
                            <p>{Math.round(day.pop * 100)}%</p>
                        </div>
                        <div className="col-3 day-high-low">
                            <p>
                                {Math.round(day.temp.max)}°/
                                {Math.round(day.temp.min)}°
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default DailyWeather