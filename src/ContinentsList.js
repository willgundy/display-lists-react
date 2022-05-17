import React from 'react';
import Continent from './Continent';

export default function ContinentsList({ continents }) {
  return (
    <div>
      <h1>Continents</h1>
      <div className='flex-row'>
        {continents.map((continent, i) => 
          <Continent key={i} continent={continent} />
        )}
      </div>
    </div>
  );
}

