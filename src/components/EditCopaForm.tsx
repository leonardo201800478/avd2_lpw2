import React from 'react';
import { useForm } from '../hooks/useForm';

export const EditCopaForm = ({
  id,
  campeao,
  ano,
  sede,
  updateCopa,
  toggleEditForm
}) => {
  const [copa, handleChange] = useForm({ id, campeao, ano, sede });

  const handleSubmit = e => {
    e.preventDefault();
    updateCopa(id, copa);
    toggleEditForm(false);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Alterar nome do campeao!"
          name="campeao"
          value={copa.campeao}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Alterar o ano!"
          name="ano"
          value={copa.ano}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Alterar a sede!"
          name="sede"
          value={copa.sede}
          onChange={handleChange}
        />
        <button>Salvar</button>
      </form>
    </>
  );
};
