import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';
import TituloForm from '../components/titulos/TituloForm.jsx';
import LabelFormCheck from '../components/labels/LabelFormCheck.jsx';

const Servicios = () => {
  const { state, dispatch } = useContext(AppContext);
  const history = useNavigate();
  const [error, setError] = useState(false);

  const handleCheckboxChange = (e) => {
    const selectedService = e.target.value;

    if (e.target.checked) {
      dispatch({ type: 'ADD_SERVICIO', payload: selectedService }); //Agregamos los servicios cuando de clic en siguiente
    } else {
      dispatch({ type: 'REMOVE_SERVICIO', payload: selectedService });  //Removemos el servicio en caso de que desmarque una casilla
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.servicios.length === 0) {
      setError(true);
      return;
    }
    history('/orden');  // Ir a form de orden
  };

  const handleAtrasClick = () => {
    history('/vehiculo'); //Ir a form de vehiculo
  };

  return (

    // Ingreso de servicios
    <div className="container my-4">
      <TituloForm className={'text-center'} text='Selección de servicios'/>

      {/* Mensaje de alerta para campos vacios */}
      {error && (
        <div className="alert alert-danger" role="alert">
          Debes elegir al menos uno de los campos
        </div>
      )}

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-cliente">

          <div className="form-check">
            <LabelFormCheck className='form-check-label' tipo="Cambio de aceite" text='Cambio de aceite'/>
            <input className="form-check-input"
              type="checkbox"
              value="Cambio de aceite"
              id="Cambio de aceite"
              checked={state.servicios.includes("Cambio de aceite")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <LabelFormCheck className='form-check-label' tipo="Cambio de frenos" text='Cambio de frenos'/>
            <input className="form-check-input"
              type="checkbox"
              value="Cambio de frenos"
              id="Cambio de frenos"
              checked={state.servicios.includes("Cambio de frenos")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <LabelFormCheck className='form-check-label' tipo="Alineacion y balanceo" text='Alineacion y balanceo'/>
            <input className="form-check-input"
              type="checkbox"
              value="Alineacion y balanceo"
              id="Alineacion y balanceo"
              checked={state.servicios.includes("Alineacion y balanceo")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <LabelFormCheck className='form-check-label' tipo="Diagnostico General" text='Diagnostico General'/>
            <input className="form-check-input"
              type="checkbox"
              value="Diagnostico General"
              id="Diagnostico General"
              checked={state.servicios.includes("Diagnostico General")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <LabelFormCheck className='form-check-label' tipo="Revision del sistema electrico" text='Revision del sistema electrico'/>
            <input className="form-check-input"
              type="checkbox"
              value="Revision del sistema electrico"
              id="Revision del sistema electrico"
              checked={state.servicios.includes("Revision del sistema electrico")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <LabelFormCheck className='form-check-label' tipo="Reparacion de neumaticos" text='Reparacion de neumaticos'/>
            <input className="form-check-input"
              type="checkbox"
              value="Reparacion de neumaticos"
              id="Reparacion de neumaticos"
              checked={state.servicios.includes("Reparacion de neumaticos")}
              onChange={handleCheckboxChange}
            />
          </div>

          <div className="form-check">
            <LabelFormCheck className='form-check-label' tipo="Mantenimiento del sistema de aire acondicionado" text='Mantenimiento del sistema de aire acondicionado'/>
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
        </form >
      </div >

    </div >
  );
};

export default Servicios;

