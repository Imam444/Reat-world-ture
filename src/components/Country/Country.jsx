import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitCountry, handleVisitedFlags}) => {
    const {name,flags, population, area,cca3} =country;
    const [visited, setVisited] =useState(false);
    const handleVisited =()=>{
        setVisited(!visited)
    }
    const passWithParams = () => handleVisitCountry(country)
    return (
        <div className={`country ${visited && 'visit'}`}>
            <h3 style={{color: visited ? 'Purple': 'black'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={() => handleVisitCountry(country)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>add flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
            {visited ?'I have visited this country':'I want to visit'}
        </div>
    );
};

export default Country;