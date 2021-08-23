const getTime = timestamp => {
    const date = new Date(timestamp * 1000)
    let hours = date.getHours()
    let timeOfDay = 'am'
    if (hours > 12) {
        timeOfDay = 'pm'
        hours = hours - 12
    }
    if(hours === 0) {
        hours = 12
    }
    let minutes = date.getMinutes().toString()
    if (minutes.length === 1) {
        minutes = '0' + minutes
    }
    return {
        hours: hours,
        timeOfDay: timeOfDay,
        minutes: minutes
    }
}

export default getTime