import React from 'react';

export default function State({ state }) {
  return (
    <div className='card'>
      <h2>{state.name}</h2>
      <label>
          Population
        <p>{state.population}</p>
      </label>
      <label>
          Country
        <p>{state.country}</p>
      </label>
      <label>
          Capital
        <p>{state.cities.capital}</p>
      </label>
      <label>
          Largest City
        <p>{state.cities.largest}</p>
      </label>
    </div>
  );
}
