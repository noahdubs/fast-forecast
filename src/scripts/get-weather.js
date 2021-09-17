import { getTime } from './get-time'
export const getHourlyWeather = (weatherData, locationData) => {
    const locationObject = locationData[0]
    weatherData.location = {
        name: locationObject.name,
        country: locationObject.country,
        state: locationObject.state 
    }

    const timeZone = weatherData.timezone 

    const dayHourly = weatherData.hourly.slice(0,24)
    // start
    for(let i = 0; i < dayHourly.length; i++){
        const {hours, timeOfDay, dayOfWeekId} = getTime(dayHourly[i].dt, timeZone)
        dayHourly[i].time = {
            hours: hours, 
            timeOfDay: timeOfDay,
            dayOfWeekId: dayOfWeekId 
        } 
    }

    weatherData.hourly = dayHourly


    return weatherData 
}

