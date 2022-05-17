import React from 'react';
import Cities from './Cities';

export default function CitiesList({ cities }) {
  return (
    <div>
      <h1>Cities</h1>
      <div className='flex-row'>
        {cities.map((city, i) => 
          <Cities key={i} city={city} />
        )}
      </div>
    </div>
  );
}
