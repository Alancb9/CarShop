import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const OrdenTrabajo = () => {
  const { state } = useContext(AppContext);
  const [fechaEntrega, setFechaEntrega] = useState('');
  const history = useNavigate();

  const handleInputChange = (e) => {
    setFechaEntrega(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías realizar la lógica para generar la orden de trabajo final
    history.push('/cliente'); // Volver al inicio después de la aprobación final
  };

  return (
    <div>
      <h2>Orden de trabajo</h2>
      <form onSubmit={handleSubmit}>
        {/* Mostrar información ingresada para confirmación */}
        {/* Campo de fecha y hora estimada de entrega */}
        <button type="submit" disabled={!fechaEntrega}>
          Aprobar orden
        </button>
      </form>
    </div>
  );
};

export default OrdenTrabajo;
