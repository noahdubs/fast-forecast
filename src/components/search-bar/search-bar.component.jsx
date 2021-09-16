import React, {useState} from 'react'
import './search-bar.styles.css'

import { FormInput } from '../form-input/form-input.component'
import { loopOverText, getState, getCountry, getCity } from '../../scripts/loop-over-text'

const SearchBar = props => {
    const [search, setSearch] = useState({text: ''})
    const [hexs, setHexs] = useState(false)

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

        console.log(cityName, stateCode, countryCode)

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=1&appid=${apiKey}`)
            .then(res => res.json())
            .then(coords => {
                console.log(coords)
                const hexLat = coords[0].lat
                const hexLon = coords[0].lon
                setHexs({
                    hexLat: hexLat,
                    hexLon: hexLon
                })

                window.location.href = `/weather/${hexLat}/${hexLon}`
            })
            .catch(err => console.log("error", err))
    }

    return (
        <form className={`search-form form-inline ${props.for === 'weather-nav' ? 'weather-form' : 'homepage-search-form'}`} onSubmit={handleSubmit} >
            <div className={ `form-group `}>
                <FormInput 
                    name="text"
                    type="search"
                    onChange={handleChange}
                    value={search.text}
                    type={props.for}
                    placeholder={'Search City'}
                    required
                />
                <button className="search-button">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </form>
    )
    
}

export default SearchBar 