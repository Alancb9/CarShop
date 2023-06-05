import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const FormVehiculo = () => {
  const { state, dispatch } = useContext(AppContext);
  const [vehiculo, setVehiculo] = useState(state.vehiculo);
  const history = useNavigate();

  const handleInputChange = (e) => {
    setVehiculo({
      ...vehiculo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_VEHICULO', payload: vehiculo });
    history.push('/servicios');
  };

  return (
    <div>
      <h2>Datos del vehículo</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario para datos del vehículo */}
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
};

export default FormVehiculo;
