import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('Add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {/* visited country */}
            <div>
                <h4>Visited Countries:{visitedCountries.length}</h4>
                <ul>
                    {/* visitedCountries.map(country => <li key={country} >{country.name.common}</li>) */}
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;