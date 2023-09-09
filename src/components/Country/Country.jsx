import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    console.log(country)
    const { name, flags, population, area, region, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams = () => handleVisitedCountry(country);


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <h2>Population: {population}</h2>
            <h3>Area: {area}</h3>
            <h3>Region: {region}</h3>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <br />
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Visited Flag</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? '  I have visited this country.' : ' I wanted to visited this country.'
            }
        </div>
    );
};

export default Country;