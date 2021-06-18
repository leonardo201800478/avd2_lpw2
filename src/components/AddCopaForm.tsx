import React, { useState } from 'react';
import { FormProps } from '../types/types';
import { Copa } from '../types/types';

export const AddCopaForm: React.FC<FormProps> = ({ addCopa }) => {
  const initialValue: Copa = {
    id: '',
    campeao: '',
    ano: '',
    sede: ''
  };

  const [copa, setCopa] = useState(initialValue);

  const handleChange = e => {
    setCopa({ ...copa, [e.target.campeao]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addCopa(copa);
    setCopa(initialValue);
  };

  return (
    <>
      
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          name="campeao"
          placeholder="Entre com o nome do campeão"
          onChange={handleChange}
          value={copa.campeao}
        />
      
        <input
          type="text"
          name="ano"
          placeholder="Entre com o ano do título"
          onChange={handleChange}
          value={copa.ano}
        />
        
        <input
          type="text"
          name="sede"
          placeholder="Entre com o país sede da Copa"
          onChange={handleChange}
          value={copa.sede}
        />
             
        <button>Adicionar</button>
      </form>
    </>
  );
};
