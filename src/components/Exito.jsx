import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';

const Exito = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleReservarOtraCita = () => {
    dispatch({ type: 'RESET_DATOS' });
    navigate('/cliente'); // Redirigir al inicio para reservar otra cita
  };

  return (
    <div className="container">

      <form onSubmit={handleReservarOtraCita} className="form-cliente py-5">
        <h2 className="text-center my-5">Cita reservada exitosamente</h2>
        <p className="text-center my-3">Felicidades, tu cita ha sido reservada correctamente.</p>
        <div className="d-md-flex justify-content-md-center my-5">
          <button type="submit" className="btn btn-primary">Reservar otra cita</button>
        </div>
      </form>

    </div>
  );
};

export default Exito;