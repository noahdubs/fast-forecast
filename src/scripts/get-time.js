export const getDayOfWeek = timestamp => {
    const date = new Date(timestamp * 1000)
    const day = date.getDay()

    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }
    return days[day]
}

export const getTime = timestamp => {
    const date = new Date(timestamp * 1000)
    let hours = date.getHours()
    let timeOfDay = 'am'
    const dayOfWeek = getDayOfWeek(timestamp)
    if (hours >= 12) {
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
        minutes: minutes,
        dayOfWeek: dayOfWeek,
        dayOfWeekId: date.getDay()
    }
}
