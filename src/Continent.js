import React from 'react';

export default function Continent({ continent }) {
  return (
    <div className='card'>
      <h2>{continent.name}</h2>
      <label>
              Population
        <p>{continent.pop}</p>
      </label>
      <label>
              Area
        <p>{continent.area}</p>
      </label>
      <label>
              Pop Desnity
        <p>{continent.popdense}</p>
      </label>
    </div>
  );
}
