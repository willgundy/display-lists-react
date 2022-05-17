import React from 'react';
import Country from './Country';

export default function CountriesList({ countries }) {
  return (
    <div>
      <h1>Countries</h1>
      {countries.map((country, i) => 
        <Country key={i} country={country} />
      )}
    </div>
  );
}
