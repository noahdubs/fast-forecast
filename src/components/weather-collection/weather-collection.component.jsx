import React, {useState, useEffect} from 'react'

import MainWeather from '../main-weather/main-weather.component'
import DailyWeather from '../daily-weather/daily-weather.component'
import HourlyWeather from '../hourly-weather/hourly-weather.component'

import { getHourlyWeather } from '../../scripts/get-weather'
import {Loading} from '../loading/loading.component'
import {nightOrDay} from '../../scripts/get-night-or-day'

import './weather-collection.styles.css'

const WeatherCollection = ({lat, lon}) => {
    const [weather, setWeather] = useState()

    const apiKey = 'b504e77f4158753c73047b49554c803f'
    const units = 'imperial'

    useEffect(() => {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely&appid=${apiKey}`
            const locationUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`

            Promise.all([
                fetch(weatherUrl).then(res => res.json()),
                fetch(locationUrl).then(res => res.json())
            ]).then(([weatherData, locationData]) => {
                console.log(weatherData, locationData)
                const getWeather = getHourlyWeather(weatherData, locationData)
                setWeather(getWeather)
            })
    }, [])

    const getTheme = () => {
        const nightTime = nightOrDay(weather.current.dt, weather.timezone, weather.current.sunrise, weather.current.sunset) 
        if(nightTime) {
            return {
                collectionClass: 'collection-nightime',
                nightTime: true 
            }
        } else {
            return {
                collectionClass: 'collection-daytime',
                nightTime: false
            }
        }
    } 
    

    if(weather) {
        const theme = getTheme() 
        console.log(theme)
        const sunrise = weather.current.sunrise 
        const sunset = weather.current.sunset 

        return (
            <div className={`weather-collection ${theme.collectionClass}`}>
                {theme.nightTime ? <div className="stars"></div> : null}
                <div className="row weather-row">
                    <div className="col-lg-7 main-col">
                        <MainWeather 
                            location={weather.location}
                            current={weather.current}
                            nightTime={theme.nightTime}
                            timeZone={weather.timezone}
                        />
                        <HourlyWeather 
                            hourly={weather.hourly}
                            nightTime={theme.nightTime}
                            sunrise={sunrise}
                            sunset={sunset}
                            dayOfWeekId={weather.hourly[0].time.dayOfWeekId}
                            timeZone={weather.timezone}
                        />
                    </div>
                    <div className="col-lg-4 daily-col">
                        <DailyWeather
                            daily={weather.daily.slice(1, 8)}
                            nightTime={theme.nightTime}
                            timeZone={weather.timezone}
                        />
                    </div>
                    
                </div>
                <div className="spacing"></div>
            </div>
        )
    } else {
        return (
            <Loading />
        )
    }
    
}

export default WeatherCollection