import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const FormCliente = () => {
  const { state, dispatch } = useContext(AppContext);
  const [cliente, setCliente] = useState(state.cliente);
  const [camposInvalidos, setCamposInvalidos] = useState([]);
  const history = useNavigate();

  const handleInputChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion
    // if (
    //   cliente.nombre === '' ||
    //   cliente.email === '' ||
    //   cliente.contacto === '' ||
    //   cliente.tipoIdentificacion === ''
    // ) {
    //   alert('Por favor, complete todos los campos.');
    //   return;
    // }
    const camposRequeridos = ['nombre', 'email', 'contacto', 'tipoIdentificacion'];
    const camposInvalidos = camposRequeridos.filter((campo) => cliente[campo] === '');
    if (camposInvalidos.length > 0) {
      setCamposInvalidos(camposInvalidos);
      return;
    }

    dispatch({ type: 'SET_CLIENTE', payload: cliente });
    history('/vehiculo');
  };

  return (
    <div>
      <h2>Datos del cliente</h2>
      <form onSubmit={handleSubmit}>


        {/* Campos del formulario para datos del cliente */}
        <div>
          <label htmlFor="nombre">Nombre del cliente:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={cliente.nombre}
            onChange={handleInputChange}
            className={camposInvalidos.includes('nombre') ? 'invalid' : ''}
          />
          
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={cliente.email}
            onChange={handleInputChange}
            className={camposInvalidos.includes('email') ? 'invalid' : ''}
          />
          {camposInvalidos.includes('email') && <span className="asterisk">*</span>}
        </div>

        <div>
          <label htmlFor="contacto">Número de contacto:</label>
          <input
            type="text"
            id="contacto"
            name="contacto"
            value={cliente.contacto}
            onChange={handleInputChange}
            className={camposInvalidos.includes('contacto') ? 'invalid' : ''}
          />
          {camposInvalidos.includes('contacto') && <span className="asterisk">*</span>}
        </div>

        <div>
          <label htmlFor="tipoIdentificacion">Tipo de identificación:</label>
          <select
            id="tipoIdentificacion"
            name="tipoIdentificacion"
            value={cliente.tipoIdentificacion}
            onChange={handleInputChange}
          >
            <option value="cedula">Cédula</option>
            <option value="ruc">RUC</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
          <input
            type="text"
            id="tipoIdentificacion"
            name="tipoIdentificacion"
            value={cliente.tipoIdentificacion}
            onChange={handleInputChange}
            className={camposInvalidos.includes('tipoIdentificacion') ? 'invalid' : ''}
          />
          {camposInvalidos.includes('tipoIdentificacion') && <span className="asterisk">*</span>}

        </div>
        <button type="submit">Siguiente</button>
      </form>

      
    </div>
  );
};

export default FormCliente;
