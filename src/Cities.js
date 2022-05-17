import React from 'react';

export default function Cities({ city }) {
  return (
    <div className='card'>
      <h2>{city.name}</h2>
      <label>
            Population
        <p>{city.pop}</p>
      </label>
      <label>
            Size
        <p>{city.area}</p>
      </label>
      <label>
            Pop Density
        <p>{city.popdense}</p>
      </label>
    </div>
  );
}
