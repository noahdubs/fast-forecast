import React, {useState, useEffect} from 'react'

import MainWeather from '../main-weather/main-weather.component'
import SidePanel from '../side-panel/side-panel.component'
import HourlyWeather from '../hourly-weather/hourly-weather.component'

import getTime from '../../scripts/get-time'

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
                const locationObject = locationData[0]
                weatherData.location = {
                    name: locationObject.name,
                    country: locationObject.country,
                    state: locationObject.state 
                }
                const dayHourly = weatherData.hourly.slice(0,24)
                for(let i = 0; i < dayHourly.length; i++){
                    const {hours, timeOfDay} = getTime(dayHourly[i].dt)
                    console.log(hours, timeOfDay)
                    dayHourly[i].time = {
                        hours: hours, 
                        timeOfDay: timeOfDay
                    } 
                }

                weatherData.hourly = dayHourly
                setWeather(weatherData)
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
                collectionClass: '',
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
                    <MainWeather 
                        location={weather.location}
                        current={weather.current}
                        nightTime={theme.nightTime}
                    />
                    <SidePanel 
                        current={weather.current}
                        nightTime={theme.nightTime}
                    />
                </div>
                <div className="spacing"></div>
                <div className="row weather-row">
                    <HourlyWeather 
                        hourly={weather.hourly}
                        nightTime={theme.nightTime}
                        sunrise={sunrise}
                        sunset={sunset}
                    />
                    <SidePanel
                        current={weather.current}
                        nightTime={theme.nightTime}
                    />
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
    } else {
        return (
            <div>Loading</div>
        )
    }
    
}

export default WeatherCollection