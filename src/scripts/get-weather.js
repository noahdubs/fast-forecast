import getTime from './get-time'
export const getHourlyWeather = (weatherData, locationData) => {
    const locationObject = locationData[0]
    weatherData.location = {
        name: locationObject.name,
        country: locationObject.country,
        state: locationObject.state 
    }
    const dayHourly = weatherData.hourly.slice(0,24)
    for(let i = 0; i < dayHourly.length; i++){
        const {hours, timeOfDay} = getTime(dayHourly[i].dt)
        dayHourly[i].time = {
            hours: hours, 
            timeOfDay: timeOfDay
        } 
    }

    weatherData.hourly = dayHourly

    return weatherData 
}

