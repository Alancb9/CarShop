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
    <div className="container">
      <h2 className="text-center my-3">Datos del vehículo</h2>

      <div className="form-container mb-4">
        <form onSubmit={handleSubmit} className="form-cliente">

          {camposInvalidos.length > 0 && (
            <div className="alert alert-danger" role="alert">
              Los campos en rojo son obligatorios.
            </div>
          )}

          <div className="row mt-3">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="marca">Marca del vehiculo:</label>
                <input
                  type="text"
                  name="marca"
                  value={vehiculo.marca}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos.includes('marca') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="modelo">Modelo:</label>
                <input
                  type="text"
                  name="modelo"
                  value={vehiculo.modelo}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos.includes('modelo') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="placa">Placa:</label>
                <input
                  type="text"
                  name="placa"
                  value={vehiculo.placa}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos.includes('placa') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="nivelTanque">Nivel del tanque de gasolina:</label>
                <input
                  type="text"
                  name="nivelTanque"
                  value={vehiculo.nivelTanque}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos.includes('nivelTanque') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-ms-12">
              <div className="form-group">
                <label htmlFor="estadoExterior">Estado exterior del vehiculo</label>
                <textarea
                  name="estadoExterior"
                  value={vehiculo.estadoExterior}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos.includes('estadoExterior') ? 'is-invalid' : ''}`}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="d-md-flex justify-content-md-end mt-4 mb-5">
            <button class="btn btn-primary me-md-2" type="button" onClick={handleAtrasClick}>Atrás</button>
            <button type="submit" className="btn btn-primary">Siguiente</button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default FormVehiculo;
