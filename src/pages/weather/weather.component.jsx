import React, { useEffect }  from 'react'

import './weather.styles.css'

import Navbar from '../../components/navbar/navbar.component'
import WeatherCollection from '../../components/weather-collection/weather-collection.component'

const Weather = props => {
    // const apiKey = 'b504e77f4158753c73047b49554c803f'
     
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(`Latitiude is ${position.coords.latitude}`)
            console.log(`Longitude is ${position.coords.longitude}`)
            console.log(typeof position.coords.longitude)

            // const lat = position.coords.latitude.toString()
            // const long = position.coords.longitude.toString()


            // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}@lon=${long}@appid=${apiKey}`)
            //     .then(res => res.json())
            //     .then(weather => console.log(weather))
            //     .catch(er => console.log(er))
        })
    }, [])

    return (
        <div className="weather">
            <Navbar />
            <WeatherCollection />
                
            {
            // footer
            }
        </div>
    )
}

export default Weather 