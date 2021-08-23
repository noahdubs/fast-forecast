import React from 'react'

import './daily-weather.styles.css'



const DailyWeather = ({current, nightTime}) => {

    return (
        <div className={ `side-panel${nightTime ? ' nightime-panel' : ''}`  } >
            <div className="col-md-12">
            </div>
        </div>
    )

}

export default DailyWeather