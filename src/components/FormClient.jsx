import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const FormCliente = () => {
  const { state, dispatch } = useContext(AppContext);
  const [cliente, setCliente] = useState(state.cliente);
  const history = useNavigate();

  const handleInputChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_CLIENTE', payload: cliente });
    history.push('/vehiculo');
  };

  return (
    <div>
      <h2>Datos del cliente</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario para datos del cliente */}
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
};

export default FormCliente;
