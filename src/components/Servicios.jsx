import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';

const Servicios = () => {
  const { state, dispatch } = useContext(AppContext);
  const history = useNavigate();
  const [error, setError] = useState(false);

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
      setError(true);
      return;
    }

    history('/orden');
  };

  const handleAtrasClick = () => {
    history('/vehiculo');
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">Selección de servicios</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          Debes elegir al menos uno de los campos
        </div>
      )}

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-cliente">

          <div className="form-check">
            <label className="form-check-label" htmlFor="Cambio de aceite">
              Cambio de aceite
            </label>
            <input className="form-check-input"
              type="checkbox"
              value="Cambio de aceite"
              id="Cambio de aceite"
              checked={state.servicios.includes("Cambio de aceite")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="Cambio de frenos">
              Cambio de frenos
            </label>
            <input className="form-check-input"
              type="checkbox"
              value="Cambio de frenos"
              id="Cambio de frenos"
              checked={state.servicios.includes("Cambio de frenos")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="Alineacion y balanceo">
              Alineacion y balanceo
            </label>
            <input className="form-check-input"
              type="checkbox"
              value="Alineacion y balanceo"
              id="Alineacion y balanceo"
              checked={state.servicios.includes("Alineacion y balanceo")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="Diagnostico General">
              Diagnostico General
            </label>
            <input className="form-check-input"
              type="checkbox"
              value="Diagnostico General"
              id="Diagnostico General"
              checked={state.servicios.includes("Diagnostico General")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="Revision del sistema electrico">
              Revision del sistema electrico
            </label>
            <input className="form-check-input"
              type="checkbox"
              value="Revision del sistema electrico"
              id="Revision del sistema electrico"
              checked={state.servicios.includes("Revision del sistema electrico")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="Reparacion de neumaticos">
              Reparacion de neumaticos
            </label>
            <input className="form-check-input"
              type="checkbox"
              value="Reparacion de neumaticos"
              id="Reparacion de neumaticos"
              checked={state.servicios.includes("Reparacion de neumaticos")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="Mantenimiento del sistema de aire acondicionado">
              Mantenimiento del sistema de aire acondicionado
            </label>
            <input className="form-check-input"
              type="checkbox"
              value="Mantenimiento del sistema de aire acondicionado"
              id="Mantenimiento del sistema de aire acondicionado"
              checked={state.servicios.includes("Mantenimiento del sistema de aire acondicionado")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="d-md-flex justify-content-md-end mt-4 mb-1">
            <button class="btn btn-primary me-md-2" type="button" onClick={handleAtrasClick}>Atrás</button>
            <button type="submit" className="btn btn-primary">Siguiente</button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Servicios;

