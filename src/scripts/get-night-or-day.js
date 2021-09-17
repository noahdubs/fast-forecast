import { getTime } from './get-time'

export const nightOrDay = (dateTime, timeZone, sunrise, sunset) => {
    const time = getTime(dateTime, timeZone)
    const sunriseTime = getTime(sunrise, timeZone)
    const sunsetTime = getTime(sunset, timeZone)

    let times = [time, sunriseTime, sunsetTime]

    for(let i = 0; i < times.length; i++) {
        let numHours = Number(times[i].hours)
        let numMinutes = Number(times[i].minutes)

        if(times[i].timeOfDay === 'pm' && numHours !== 12){
            let newTime = numHours + 12
            times[i].hours = newTime
            times[i].minutes = numMinutes
        } else if(times[i].timeOfDay === 'am' && numHours === 12){
            times[i].hours = 0
            times[i].minutes = numMinutes
        } else {
            times[i].hours = numHours
            times[i].minutes = numMinutes 
        }
    }
    const newTime = times[0]
    const newSunrise = times[1]
    const newSunset = times[2]

    let nightTime = false 

    if(newTime.hours <= newSunrise.hours){
        if(newTime.hours === newSunrise.hours){
            if(newTime.minutes < newSunrise.minutes){
                nightTime = true 
            } else {
                nightTime = false 
            }
        } else {
            nightTime = true 
        }
        
    } else if(newTime.hours >= newSunset.hours) {

        if(newTime.hours === newSunset.hours){
            if(newTime.minutes > newSunset.minutes) {
                nightTime = true                 
            } else {
                nightTime = false
            }
        } else {
            nightTime = true 
        }
    }

    return nightTime 
}