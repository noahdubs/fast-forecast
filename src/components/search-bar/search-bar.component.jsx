import React, {useState} from 'react'
import './search-bar.styles.css'

import { FormInput } from '../form-input/form-input.component'
import { loopOverText, getState, getCountry, getCity } from '../../scripts/loop-over-text'
import { Redirect } from 'react-router-dom'

const SearchBar = props => {
    const [search, setSearch] = useState({text: ''})
    const [coords, setCoords] = useState(null)

    const apiKey = 'b504e77f4158753c73047b49554c803f'

    const handleChange = event => {
        const { name, value } = event.target 

        setSearch({...search, [name]:value})
    }

    const handleSubmit = event => {
        event.preventDefault()

        const {text} = search

        let words = loopOverText(text.toLowerCase())
        const {stateCode, stateString} = getState(words)


        let countryCode = 'US'
        let countryString

        if(!stateCode){
            const country = getCountry(words)
            if(country.countryCode){
                countryCode = country.countryCode
                countryString = country.countryString 
                words = words.filter(e => e!== countryString)
            }
            
        } else {
            words = words.filter(e => e !== stateString)
        }
        

        const cityName = getCity(words)


        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=1&appid=${apiKey}`)
            .then(res => res.json())
            .then(coords => {
                const hexLat = coords[0].lat
                const hexLon = coords[0].lon
                setCoords({
                    hexLat: hexLat,
                    hexLon: hexLon 
                })

            })
            .catch(err => {
                alert(`City not found, please use "CityName, State or CountryCode" format`)
                setSearch({text: ''})
        })
    }

    return (
        <form className={`search-form form-inline ${props.for === 'weather-nav' ? 'weather-form' : 'homepage-search-form'}`} onSubmit={handleSubmit} >
            <div className={ `form-group `}>
                <FormInput 
                    name="text"
                    type="search"
                    onChange={handleChange}
                    value={search.text}
                    classes={props.for}
                    placeholder={'Search City'}
                    required
                />
                <button className="search-button">
                    <i className="fas fa-search"></i>
                </button>
                {coords ? <Redirect from={`/weather/${props.hexlat}/${props.hexLon}`} to={`/weather/${coords.hexLat}/${coords.hexLon}`} forceRefresh={true} /> : null}
            </div>
        </form>
    )
}

export default SearchBar 