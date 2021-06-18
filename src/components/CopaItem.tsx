import React, { useState } from 'react';
import { EditCopaForm } from './EditCopaForm';

export const CopaItem = ({
  id,
  campeao,
  ano,
  sede,
  deleteCopa,
  updateCopa
}) => {
  const [isEdit, setToggleEditing] = useState(false);
  if (isEdit) {
    return (
      <EditCopaForm
        id={id}
        campeao={campeao}
        ano={ano}
        sede={sede}
        updateCopa={updateCopa}
        toggleEditForm={setToggleEditing}
      />
    );
  }

  return (
    <>
     
      <span><h2>{campeao}</h2></span>
      <span><h3>Ano: {ano}</h3></span>
      <span><h3>Sede: {sede}</h3></span>
      <span><button onClick={() => setToggleEditing(!isEdit)}>Alterar</button></span>
      <span><button onClick={() => deleteCopa(id)}>Excluir</button></span>
    
    </>
  );
};
