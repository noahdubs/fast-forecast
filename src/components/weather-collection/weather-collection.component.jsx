import React, {useState, useEffect} from 'react'

import MainWeather from '../main-weather/main-weather.component'
import DailyWeather from '../daily-weather/daily-weather.component'
import HourlyWeather from '../hourly-weather/hourly-weather.component'

import { getHourlyWeather } from '../../scripts/get-weather'

import './weather-collection.styles.css'

const WeatherCollection = props => {
    const [weather, setWeather] = useState()

    const apiKey = 'b504e77f4158753c73047b49554c803f'
    const units = 'imperial'

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude.toString()
            const long = position.coords.longitude.toString()

            const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${units}&exclude=minutely&appid=${apiKey}`
            const locationUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${apiKey}`

            Promise.all([
                fetch(weatherUrl).then(res => res.json()),
                fetch(locationUrl).then(res => res.json())
            ]).then(([weatherData, locationData]) => {
                const getWeather = getHourlyWeather(weatherData, locationData)
                console.log(getWeather)
                setWeather(getWeather)
            })
        })
    }, [])
    console.log(weather)

    const getTheme = () => {
        const {current} = weather 
        if(current.dt >= current.sunset || current.dt < current.sunrise) {
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
                    <div className="col-md-7">
                        <MainWeather 
                            location={weather.location}
                            current={weather.current}
                            nightTime={theme.nightTime}
                        />
                        <HourlyWeather 
                            hourly={weather.hourly}
                            nightTime={theme.nightTime}
                            sunrise={sunrise}
                            sunset={sunset}
                            dayOfWeekId={weather.hourly[0].time.dayOfWeekId}
                        />
                    </div>
                    <div className="col-md-4">
                        <DailyWeather
                            daily={weather.daily.slice(1, 8)}
                            nightTime={theme.nightTime}
                        />
                    </div>
                    
                </div>
                <div className="spacing"></div>
            </div>
        )
    } else {
        return (
            <div>Loading</div>
        )
    }
    
}

export default WeatherCollection