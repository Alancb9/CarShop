import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Servicios = () => {
  const { state, dispatch } = useContext(AppContext);
  const history = useNavigate();

  const handleCheckboxChange = (e) => {
    const selectedService = e.target.value;

    if (e.target.checked) {
      dispatch({ type: 'ADD_SERVICIO', payload: selectedService });
    } else {
      dispatch({ type: 'REMOVE_SERVICIO', payload: selectedService });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.servicios.length === 0) {
      alert('Por favor, seleccione al menos un servicio.');
      return;
    }

    history('/orden');
  };

  const handleAtrasClick = () => {
    history('/vehiculo');
  };

  return (
    <div>
      <h2>Selección de servicios</h2>
      <form onSubmit={handleSubmit}>
        {/* Lista de servicios disponibles con checkboxes */}
        <div>
          <label htmlFor="Cambio de aceite">Cambio de aceite: </label>
          <input
            type="checkbox"
            value="Cambio de aceite"
            checked={state.servicios.includes("Cambio de aceite")}
            onChange={handleCheckboxChange}
          />
        </div>
        <div>
          <label htmlFor="Cambio de frenos">Cambio de frenos: </label>
          <input
            type="checkbox"
            value="Cambio de frenos"
            checked={state.servicios.includes("Cambio de frenos")}
            onChange={handleCheckboxChange}
          />
        </div>
        <div>
          <label htmlFor="Alineación y balanceo">Alineacion y balanceo: </label>
          <input
            type="checkbox"
            value="Alineacion y balanceo"
            checked={state.servicios.includes("Alineacion y balanceo")}
            onChange={handleCheckboxChange}
          />
        </div>
        <div>
          <label htmlFor="Diagnóstico general">Diagnostico General: </label>
          <input
            type="checkbox"
            value="Diagnostico general"
            checked={state.servicios.includes("Diagnostico general")}
            onChange={handleCheckboxChange}
          />
        </div>
        <div>
          <label htmlFor="Revisión sistema eléctrica">Revision del sistema electrico: </label>
          <input
            type="checkbox"
            value="Revision del sistema electrico"
            checked={state.servicios.includes("Revision del sistema electrico")}
            onChange={handleCheckboxChange}
          />
        </div>
        <button type="submit">Siguiente</button>
      </form>
      <button onClick={handleAtrasClick}>Atrás</button>
    </div>
  );
};

export default Servicios;

