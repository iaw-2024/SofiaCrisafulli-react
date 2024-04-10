import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Usuario from './Usuario';

const UsuarioList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await axios.get('http://localhost:3001/api/usuarios');
      setUsuarios(response.data);
    };

    fetchUsuarios();
  }, []);

  return (
    <div>
      {usuarios.map(usuario => (
        <Usuario key={usuario.email} usuario={usuario} />
      ))}
    </div>
  );
};

export default UsuarioList;
