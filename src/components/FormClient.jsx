import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';


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
    const camposRequeridos = ['nombre', 'email', 'contacto', 'tipoIdentificacion', 'identificacion'];
    const camposInvalidos = camposRequeridos.filter((campo) => cliente[campo] === '');
    if (camposInvalidos.length > 0) {
      setCamposInvalidos(camposInvalidos);
      console.log(camposInvalidos)
      return;
    }

    console.log(cliente)
    dispatch({ type: 'SET_CLIENTE', payload: cliente });
    history('/vehiculo');
  };

  return (
    <div className="container">
      <h2 className="text-center my-3">Datos del cliente</h2>

      <form onSubmit={handleSubmit} className="form-cliente">

        {camposInvalidos.length > 0 && (
          <div className="alert alert-danger" role="alert">
            Los campos en rojo son obligatorios.
          </div>
        )}
        
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="nombre">Nombre del cliente:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={cliente.nombre}
                onChange={handleInputChange}
                className={`form-control ${camposInvalidos.includes('nombre') ? 'is-invalid' : ''}`}
              />
              {/* {camposInvalidos.includes('nombre') && renderCampoInvalidoMensaje('nombre')} */}
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={cliente.email}
                onChange={handleInputChange}
                className={`form-control ${camposInvalidos.includes('email') ? 'is-invalid' : ''}`}
              />
              {/* {camposInvalidos.includes('email') && <span className="asterisk">*</span>} */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="contacto">Número de contacto:</label>
              <input
                type="text"
                id="contacto"
                name="contacto"
                value={cliente.contacto}
                onChange={handleInputChange}
                className={`form-control ${camposInvalidos.includes('contacto') ? 'is-invalid' : ''}`}
              />
              {/* {camposInvalidos.includes('contacto') && <span className="asterisk">*</span>} */}
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="tipoIdentificacion">Tipo de identificación:</label>
              <select
                id="tipoIdentificacion"
                name="tipoIdentificacion"
                value={cliente.tipoIdentificacion}
                onChange={handleInputChange}
                // className="form-control"
                className={`form-control ${camposInvalidos.includes('tipoIdentificacion') ? 'is-invalid' : ''}`}
              >
                <option selected value="">Escoja una de las opciones</option>
                <option value="cedula">Cédula</option>
                <option value="ruc">RUC</option>
                <option value="pasaporte">Pasaporte</option>
              </select>
              {/* {camposInvalidos.includes('tipoIdentificacion') && <span className="asterisk">*</span>} */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="identificacion">Numero de identificacion:</label>
              <input
                type="text"
                id="identificacion"
                name="identificacion"
                value={cliente.identificacion}
                onChange={handleInputChange}
                className={`form-control ${camposInvalidos.includes('identificacion') ? 'is-invalid' : ''}`}
              />
              {/* {camposInvalidos.includes('identificacion') && <span className="asterisk">*</span>} */}
            </div>
          </div>
        </div>

        <div className="d-md-flex justify-content-md-end mt-4 mb-5">
          <button type="submit" className="btn btn-primary">Siguiente</button>
        </div>


      </form>
    </div>



  );
};

export default FormCliente;
