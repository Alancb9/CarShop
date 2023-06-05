import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Servicios = () => {
  const { state, dispatch } = useContext(AppContext);
  const [servicios, setServicios] = useState(state.servicios);
  const history = useNavigate();

  const handleCheckboxChange = (e) => {
    const selectedService = e.target.value;
    if (e.target.checked) {
      setServicios([...servicios, selectedService]);
    } else {
      setServicios(servicios.filter((service) => service !== selectedService));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_SERVICIOS', payload: servicios });
    history.push('/orden');
  };

  return (
    <div>
      <h2>Selección de servicios</h2>
      <form onSubmit={handleSubmit}>
        {/* Lista de servicios disponibles con checkboxes */}
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
};

export default Servicios;
