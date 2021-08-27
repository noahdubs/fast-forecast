import { states } from '../assets/states'
import { countries } from '../assets/countries'

export const loopOverText = text => {
    let currentWord = ''
    let words = []
    for(let i = 0; i < text.length; i++){
        if(text[i] === ' ') {
            words.push(currentWord)
            currentWord = ''
        } else if(i === (text.length - 1)) {
            currentWord += text[i]  
            words.push(currentWord)
        } else {
            currentWord += text[i] 
        }
    }
    return words 
}

export const getState = words => {
    let i, j, string
    let stateCode = false
    for(i = 0; i < states.length; i++) {
        const {name, abbreviation} = states[i] 
        for(j = 0; j < words.length; j++) {
            if(words[j] === name.toLowerCase() || words[j] === abbreviation.toLowerCase()){
                stateCode = abbreviation
                string = words[j]
            }
        }
    }
    return {
        stateCode: stateCode,
        stateString: string
    } 
}

export const getCountry = words => {
    let i, j, string;
    let countryCode = false 
    for(i = 0; i < countries.length; i++) {
        const {name, code} = countries[i]
        let lowerCode = code.toLowerCase()
        for(j = 0; j < words.length; j++){
            if(words[j] === lowerCode){
                countryCode = code 
                string = words[j]
            }
        }
    }
    return {
        countryCode: countryCode,
        countryString: string 
    }
}

export const getCity = words => {
    let cityName = ''
    let i 
    for(i = 0; i < words.length; i++){
        const word = words[i]
        cityName += word
        if(word.charAt(word.length - 1) === ',') {
            cityName = cityName.substring(0, cityName.length - 1)
            break 
        }
        cityName += ' '
        if(i === words.length-1){
            cityName = cityName.substring(0, cityName.length - 1)
        } 
    }
    return cityName
}

