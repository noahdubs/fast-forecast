import React from 'react'

import './side-panel.styles.css'

const getCardinal= angle => {
    const degreePerDirection = 360 / 8

  
    const offsetAngle = angle + degreePerDirection / 2

    return (offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection) ? "N"
        : (offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection) ? "NE"
        : (offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection) ? "E"
            : (offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection) ? "SE"
            : (offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection) ? "S"
                : (offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection) ? "SW"
                : (offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection) ? "W"
                    : "NW"
}

const SidePanel = ({current, nightTime}) => {

    return (
        <div className={`col-md-4 side-panel${nightTime ? ' nightime-panel' : ''}`  } >
            <div className="col-md-12">
                <p>Feels like {Math.round(current.feels_like)} degrees</p>
                <p>Humidity {current.humidity}%</p>
                <p>Wind {Math.round(current.wind_speed)} mph</p>
                <p>direction {getCardinal(current.wind_ang)}</p>
            </div>
        </div>
    )

}

export default SidePanel 