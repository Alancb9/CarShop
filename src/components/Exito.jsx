import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Exito = () => {
  const {state, dispatch} = useContext(AppContext);
  const navigate = useNavigate();

  const handleReservarOtraCita = () => {
    dispatch({ type: 'RESET_DATOS' });
    navigate('/cliente'); // Redirigir al inicio para reservar otra cita
  };

  return (
    <div>
      <h2>Cita reservada exitosamente</h2>
      <p>Felicidades, tu cita ha sido reservada correctamente.</p>
      <button onClick={handleReservarOtraCita}>Reservar otra cita</button>
    </div>
  );
};

export default Exito;