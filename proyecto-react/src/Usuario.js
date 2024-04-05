import React from 'react';

const Usuario = ({ usuario }) => {
  const { email, genero } = usuario;
  return (
    <div>
      <p>Email: {usuario.email}</p>
      <p>Género: {usuario.gender}</p>
    </div>
  );
};

export default Usuario;
