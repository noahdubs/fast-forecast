export const getDayOfWeek = text => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    console.log(text)

    // stopped here 
    // days.forEach(day => {
    //     if(text.includes(day)){
    //         return day 
    //     }
    // })
}

export const getTime = (timestamp, timeZone) => {
    // console.log(timestamp, timeZone)
    const dateTime = new Date(timestamp * 1000)

    const formattedDate = new Intl.DateTimeFormat('en-us', {dateStyle: 'full', timeStyle: 'long', timeZone: timeZone}).format(dateTime)
    // console.log(formattedDate)
    const dateArr = formattedDate.split(", 2021 at ")
    // console.log(dateArr)

    // let hours = ''
    // 

    // check if on hour (:00:00), if so split for time
    // if not get hours old way 
    let hours = ''
    let timeOfDay 
    let foundHours = false 
    let foundTimeOfDay = false 
    if(formattedDate.includes(":00:00")){
        let timeArr = dateArr[1].split(":00:00 ")
        // console.log(timeArr)
        hours = timeArr[0]
        const time = timeArr[1]
        timeOfDay = time.slice(0, 2).toLowerCase()
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
                console.log(dateArr[1][i])
                if(dateArr[1][i] === "A" || dateArr[1][i] === "P" && !foundTimeOfDay) {
                    let dtStr = dateArr[1][i] + 'M'
                    timeOfDay = dtStr.toLowerCase()
                    foundTimeOfDay = true 
                }
            }
        }
    }

    
    const dayOfWeek = getDayOfWeek(dateArr[0])

    



    let minutes = dateTime.getMinutes().toString()
    if (minutes.length === 1) {
        minutes = '0' + minutes
    }
    return {
        hours: hours,
        timeOfDay: timeOfDay,
        minutes: minutes,
        dayOfWeek: dayOfWeek,
        dayOfWeekId: dateTime.getDay()
    }
}
