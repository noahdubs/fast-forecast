import React from 'react'

import { getTime } from './get-time'

import partlyCloudy from '../assets/partly-cloudy.png'
import smallPartlyCloudy from '../assets/small-partly-cloudy.png'

import cloudy from '../assets/cloudy.png'
import smallCloudy from '../assets/small-cloudy.png'

import sunny from '../assets/sunny.png'
import smallSunny from '../assets/small-sunny.png'

import moon from '../assets/moon.png'
import smallMoon from '../assets/small-moon.png'

import thunderstorm from '../assets/thunderstorm.png'

import thunderstormandrain from '../assets/thunderstormandrain.png'

import rain from '../assets/rain.png'
import smallRain from '../assets/small-rain.png'

import snow from '../assets/snow.png'

import haze from '../assets/haze.png'

import tornado from '../assets/tornado.png'

import dayMoon from '../assets/day-moon.png'

export const getDailyImg = weatherId => {
    let currentImg
    if(weatherId === 800) {
        currentImg = smallSunny
    }
    if (weatherId > 800 && weatherId < 803) {
        currentImg = smallPartlyCloudy
    } 
     if (weatherId > 803 && weatherId < 804) {
        currentImg = smallCloudy
    }
    if (weatherId > 209 && weatherId < 222) {
        currentImg = thunderstorm
    } 
    if (weatherId > 199 && weatherId < 233) {
        currentImg = thunderstormandrain
    }
    if (weatherId > 299 && weatherId < 532 ) {
        currentImg = smallRain 
    }
    if( weatherId > 599 && weatherId < 622) {
        currentImg = snow 
    } 
    if(weatherId > 700 && weatherId < 772) {
        currentImg = haze 
    }
    if(weatherId === 781) {
        currentImg = tornado 
    }
    return (
        <img className="daily-img" src={currentImg} />
    )
}

export const getImg = (hour, sunset, sunrise, nightTime, dayOfWeekId) => {
    const {dt, weather} = hour
    let currentImg
    const hourlyWeatherId = weather[0].id 

    let time = getTime(dt)
    if(time.dayOfWeekId !== dayOfWeekId) {
        sunset = sunset + (24*3600)
        sunrise = sunrise + (24*3600)
    }

    
    if((dt >= sunset || dt < sunrise) && !nightTime) {
        currentImg = dayMoon
    } else if(dt >= sunset || dt < sunrise) {
        currentImg = smallMoon 
    } else {
        currentImg = smallSunny
    }
    if (hourlyWeatherId > 800 && hourlyWeatherId < 803) {
        currentImg = smallPartlyCloudy
    } 
     if (hourlyWeatherId > 803 && hourlyWeatherId < 804) {
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

export const getMainImg = ({dt, sunset, sunrise, currentWeatherId})  => {
    let currentImg

    if(dt >= sunset || dt < sunrise){
        currentImg = moon 
    } else {
        currentImg = sunny
    }
    if (currentWeatherId > 800 && currentWeatherId < 803) {
        currentImg = partlyCloudy
    } 
     if (currentWeatherId > 803 && currentWeatherId < 804) {
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
    return (
       currentImg
    )
}