import { WeatherActionTypes } from './weather.types'

const INITIAL_STATE = {
    currentWeather: null 
}

const weatherReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case WeatherActionTypes.SET_CURRENT_WEATHER:
            return {
                ...state, 
                currentWeather: action.payload
            } 
        default:
            return state 
    }
}

export default weatherReducer 