import { WeatherActionTypes } from "./weather.types"

export const setCurrentWeather = weather => ({
    type: WeatherActionTypes.SET_CURRENT_WEATHER,
    payload: weather  
})