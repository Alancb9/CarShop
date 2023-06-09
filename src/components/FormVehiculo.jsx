import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const FormVehiculo = () => {
  const { state, dispatch } = useContext(AppContext);
  const [vehiculo, setVehiculo] = useState(state.vehiculo);
  const [camposInvalidos, setCamposInvalidos] = useState([]);
  const history = useNavigate();

  const handleInputChange = (e) => {
    setVehiculo({
      ...vehiculo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion
    // if (
    //   vehiculo.marca === '' ||
    //   vehiculo.modelo === '' ||
    //   vehiculo.placa === '' ||
    //   vehiculo.nivelTanque === '' ||
    //   vehiculo.nivelTanque === '' ||
    //   vehiculo.estadoExterior === ''
    // ) {
    //   alert('Por favor, complete todos los campos.');
    //   return;
    // }
    const camposRequeridos = ['marca', 'modelo', 'placa', 'nivelTanque', 'estadoExterior'];
    const camposInvalidos = camposRequeridos.filter((campo) => vehiculo[campo] === '');
    if (camposInvalidos.length > 0) {
      setCamposInvalidos(camposInvalidos);
      return;
    }


    dispatch({ type: 'SET_VEHICULO', payload: vehiculo });
    history('/servicios');
  };

  const handleAtrasClick = () => {
    history('/cliente');
  };

  return (
    <div>
      <h2>Datos del vehículo</h2>
      <form onSubmit={handleSubmit}>

        {/* Campos del formulario para datos del vehículo */}
        <div>
          <label htmlFor="marca">Marca del vehiculo:</label>
          <input
            type="text"
            name="marca"
            value={vehiculo.marca}
            onChange={handleInputChange}
            className={camposInvalidos.includes('marca') ? 'invalid' : ''}
          />
          {camposInvalidos.includes('marca') && <span className="asterisk">*</span>}
        </div>
        <div>
          <label htmlFor="modelo">Modelo:</label>
          <input
            type="text"
            name="modelo"
            value={vehiculo.modelo}
            onChange={handleInputChange}
            className={camposInvalidos.includes('modelo') ? 'invalid' : ''}
          />
          {camposInvalidos.includes('modelo') && <span className="asterisk">*</span>}
        </div>
        <div>
          <label htmlFor="placa">Placa:</label>
          <input
            type="text"
            name="placa"
            value={vehiculo.placa}
            onChange={handleInputChange}
            className={camposInvalidos.includes('placa') ? 'invalid' : ''}
          />
          {camposInvalidos.includes('placa') && <span className="asterisk">*</span>}
        </div>
        <div>
          <label htmlFor="nivelTanque">Nivel del tanque de gasolina:</label>
          <input
            type="text"
            name="nivelTanque"
            value={vehiculo.nivelTanque}
            onChange={handleInputChange}
            className={camposInvalidos.includes('nivelTanque') ? 'invalid' : ''}
          />
          {camposInvalidos.includes('nivelTanque') && <span className="asterisk">*</span>}
        </div>
        <div>
          <label htmlFor="estadoExterior">Estado exterior del vehiculo</label>
          <textarea
            name="estadoExterior"
            value={vehiculo.estadoExterior}
            onChange={handleInputChange}
            className={camposInvalidos.includes('estadoExterior') ? 'invalid' : ''}
          ></textarea>
          {camposInvalidos.includes('estadoExterior') && <span className="asterisk">*</span>}
        </div>

        <button type="submit">Siguiente</button>
      </form>
      <button onClick={handleAtrasClick}>Atrás</button>
    </div>
  );
};

export default FormVehiculo;
