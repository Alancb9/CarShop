import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';


const FormCliente = () => {
  const { state, dispatch } = useContext(AppContext);
  const [cliente, setCliente] = useState(state.cliente);
  const [camposInvalidos1, setCamposInvalidos] = useState([]);
  const history = useNavigate();
  const { isDarkMode } = state;
  console.log(isDarkMode);
  console.log("hola1")

  

  const handleInputChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const camposRequeridos = ['nombre', 'email', 'contacto', 'tipoIdentificacion', 'identificacion'];
    const camposInvalidos = camposRequeridos.filter((campo) => cliente[campo] === '');
    if (camposInvalidos.length > 0) {
      setCamposInvalidos(camposInvalidos);
      return;
    }

    dispatch({ type: 'SET_CLIENTE', payload: cliente });
    history('/vehiculo');
  };

  return (
    <div className={`container my-4`}>
      <h2 className="text-center ">Datos del cliente</h2>

      <div className="form-container">
        <form onSubmit={handleSubmit} className={`form-cliente`}>

          {camposInvalidos1.length > 0 && (
            <div className="alert alert-danger" role="alert">
              Los campos en rojo son obligatorios.
            </div>
          )}

          <div className="row mt-3">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="nombre">Nombre del cliente:</label>
                <input
                  placeholder='Nombres y Apellidos'
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={cliente.nombre}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos1.includes('nombre') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input
                  placeholder='Ejm: xxxx@xxxx.com'
                  type="email"
                  id="email"
                  name="email"
                  value={cliente.email}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos1.includes('email') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="contacto">Número de contacto:</label>
                <input
                  placeholder='Teléfono fijo o movil'
                  type="text"
                  id="contacto"
                  name="contacto"
                  value={cliente.contacto}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos1.includes('contacto') ? 'is-invalid' : ''}`}
                />
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
                  className={`form-control ${camposInvalidos1.includes('tipoIdentificacion') ? 'is-invalid' : ''}`}
                >
                  <option selected value="">Escoja una de las opciones</option>
                  <option value="cedula">Cédula</option>
                  <option value="ruc">RUC</option>
                  <option value="pasaporte">Pasaporte</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="identificacion">Numero de identificación:</label>
                <input
                  placeholder='Identificación'
                  type="text"
                  id="identificacion"
                  name="identificacion"
                  value={cliente.identificacion}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos1.includes('identificacion') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="d-md-flex justify-content-md-end mt-4 mb-5">
            <button type="submit" className="btn btn-primary">Siguiente</button>
          </div>


        </form>
      </div>
    </div>



  );
};

export default FormCliente;
