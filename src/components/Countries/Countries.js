import React from 'react'

import './countries.css'

const Countries = ({ countries, handleCountryChange }) => {

    return (
        <div className="countries-container">
            <select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </select>
        </div>
    )
}

export default Countries
