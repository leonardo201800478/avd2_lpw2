import React from 'react';
import { CopaItem } from './CopaItem';

export const Copas = ({ copas, deleteCopa, updateCopa }) => {
  return (
    <div>
      {copas.map(copa => (
        <CopaItem
          key={copa.id}
          id={copa.id}
          ano={copa.ano}
          sede={copa.sede}
          campeao={copa.campeao}
          deleteCopa={deleteCopa}
          updateCopa={updateCopa}
        />
      ))}
    </div>
  );
};
