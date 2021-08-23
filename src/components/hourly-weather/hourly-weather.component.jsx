import React from 'react'

import './hourly-weather.styles.css'

import smallPartlyCloudy from '../../assets/small-partly-cloudy.png'
import cloudy from '../../assets/cloudy.png'
import smallSunny from '../../assets/small-sunny.png'
import smallMoon from '../../assets/small-moon.png'
import thunderstorm from '../../assets/thunderstorm.png'
import thunderstormandrain from '../../assets/thunderstormandrain.png'
import rain from '../../assets/rain.png'
import snow from '../../assets/snow.png'
import haze from '../../assets/haze.png'
import tornado from '../../assets/tornado.png'
import dayMoon from '../../assets/day-moon.png'

const HourlyWeather = ({hourly, nightTime, sunrise, sunset}) => {
    console.log(hourly) 

    const getImage = ({dt, weather}) => {
        let currentImg
        const hourlyWeatherId = weather[0].id 
        
        if((dt >= sunset || dt < sunrise) && !nightTime) {
            currentImg = dayMoon
        } else if(dt >= sunset || dt < sunrise) {
            currentImg = smallMoon 
        } else {
            currentImg = smallSunny
        }
        if (hourlyWeatherId === 801) {
            currentImg = smallPartlyCloudy
        } 
         if (hourlyWeatherId === 804) {
            currentImg = cloudy
        }
         if (hourlyWeatherId > 209 && hourlyWeatherId < 222) {
            currentImg = thunderstorm
        } 
        if (hourlyWeatherId > 199 && hourlyWeatherId < 233) {
            currentImg = thunderstormandrain
        }
         if (hourlyWeatherId > 299 && hourlyWeatherId < 532 ) {
            currentImg = rain 
        }
        if( hourlyWeatherId > 599 && hourlyWeatherId < 622) {
            currentImg = snow 
        } 
        if(hourlyWeatherId > 700 && hourlyWeatherId < 772) {
            currentImg = haze 
        }
        if(hourlyWeatherId === 781) {
            currentImg = tornado 
        }

        return (
            <img src={currentImg} />
        )

    }

    return (
        <div className="col-md-7 hourly-weather">
            <div className="hourly-scroll" id="hourly-scroll">
                {hourly.map(hour => (
                    <div className="hour-of-weather" >
                        <p>{hour.time.hours}{hour.time.timeOfDay}</p>
                        {getImage(hour)}
                        <p>{Math.round(hour.temp)}</p>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default HourlyWeather