export const getDayOfWeek = (text, timeZone) => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    if(typeof text === 'string'){
        for(let i = 0; i < days.length; i++){
            if(text.includes(days[i])){
                return days[i]
            }
        }
    } else {
        const dt = new Date(text * 1000)
        const dateNow = new Intl.DateTimeFormat('en-us', {dateStyle: 'full', timeStyle: 'long', timeZone: timeZone}).format(dt)
        for(let i = 0; i < days.length; i++){
            if(dateNow.includes(days[i])){
                return days[i]
            }
        }
    }
}
export const getTime = (timestamp, timeZone) => {
    const dateTime = new Date(timestamp * 1000)

    const formattedDate = new Intl.DateTimeFormat('en-us', {dateStyle: 'full', timeStyle: 'long', timeZone: timeZone}).format(dateTime)

    const dateArr = formattedDate.split(", 2021 at ")

    const dayOfWeekId = new Date(formattedDate)

    let hours = ''
    let timeOfDay 
    let foundHours = false 
    let foundTimeOfDay = false 
    let timezoneStr = ''
    if(formattedDate.includes(":00:00")){
        let timeArr = dateArr[1].split(":00:00 ")
        hours = timeArr[0]
        const time = timeArr[1]
        timeOfDay = time.slice(0, 2).toLowerCase()
        timezoneStr = time.slice(3, 6)
    } else {
        for(let i = 0; i < dateArr[1].length; i++){
            if(dateArr[1][i] !== ':' && !foundHours){
                if(dateArr[1][i] === 0){
                    hours += '12'
                } else {
                    hours += dateArr[1][i]
                }
                
            } else {
                foundHours = true 
                if((dateArr[1][i] === "A" || dateArr[1][i] === "P") && !foundTimeOfDay) {
                    let dtStr = dateArr[1][i] + 'M'
                    timeOfDay = dtStr.toLowerCase()
                    foundTimeOfDay = true 
                    let indx = i + 2
                    let stop = dateArr[1].length
                    timezoneStr = dateArr[1].slice(indx, stop)
                }
            }
        }
    }

    const dayOfWeek = getDayOfWeek(dateArr[0], timeZone)
    let minutes = dateTime.getMinutes().toString()
    if (minutes.length === 1) {
        minutes = '0' + minutes
    }

    return {
        hours: hours,
        timeOfDay: timeOfDay,
        minutes: minutes,
        dayOfWeek: dayOfWeek,
        dayOfWeekId: dayOfWeekId.getDay(),
        timeZoneStr: timezoneStr
    }
}
