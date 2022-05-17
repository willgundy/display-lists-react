import React from 'react';

export default function Country({ country }) {
  return (
    <div className='card'>
      <h2>{country.name}</h2>
      <label>
        Continent
        <p>{country.continent}</p>
      </label>
      <label>
        Population
        <p>{country.population}</p>
      </label>
      <label>
        Capital
        <p>{country.cities.capital}</p>
      </label>
      <label>
        Largest Cities
        {country.cities.largest_cities.map((city, i) => <p key={city + i}>{city + ','}</p>)}
      </label>
      <label>
        Languages
        {country.languages.map((language, i) => <p key={language + i}>{language + ','}</p>)}
      </label>
    </div>
  );
}
