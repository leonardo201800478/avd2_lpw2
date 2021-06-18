import React, { useState } from 'react';
import { AddCopaForm } from './AddCopaForm';
import { Copas } from './Copas';
import { Copa } from '../types/types';
import { v4 as uuid } from 'uuid';

const App = () => {
  const initialData = [
    {
      id: uuid(),
      campeao: 'Brasil',
      ano: '58, 62, 70, 94, 2002',
      sede: 'Suecia, Chile, Mexico, EUA, Japao'
    }
  ];

  const [copas, setCopas] = useState(initialData);

  const addCopa= (newcopa: Copa) => {
    newcopa.id = uuid();
    setCopas([...copas, newcopa]);
  };

  const deleteCopa = copaId => {
    const updatedCopa = copas.filter(copa => copaId !== copa.id);
    setCopas(updatedCopa);
  };

  const updateCopa = (copaId, newData: Copa) => {
    let updatedCopa = copas.map(copa => {
      if (copa.id === copaId) {
        return {
          id: copa.id,
          campeao: newData.campeao,
          ano: newData.ano,
          sede: newData.sede
        };
      }
      return copa;
    });
    setCopas(updatedCopa);
  };

  return (
    <div>
      <h1>Campeões da Copa do Mundo!</h1>
      <AddCopaForm addCopa={addCopa} />
      <Copas
        copas={copas}
        deleteCopa={deleteCopa}
        updateCopa={updateCopa}
      />
    </div>
  );
};

export default App;
