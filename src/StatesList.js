import React from 'react';
import State from './State';

export default function StatesList({ states }) {
  return (
    <div>
      <h1>States</h1>
      <div className='flex-row'>
        {states.map((state, i) => 
          <State key={i} state={state} />
        )}
      </div>
    </div>
  );
}
