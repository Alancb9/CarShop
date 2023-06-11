import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const FormVehiculo = () => {
  const { state, dispatch } = useContext(AppContext);
  const [vehiculo, setVehiculo] = useState(state.vehiculo);
  const [camposInvalidos1, setCamposInvalidos] = useState([]);
  const history = useNavigate();

  const handleInputChange = (e) => {
    setVehiculo({
      ...vehiculo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    <div className="container my-4">
      <h2 className="text-center">Datos del vehículo</h2>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-cliente">

          {camposInvalidos1.length > 0 && (
            <div className="alert alert-danger" role="alert">
              Los campos en rojo son obligatorios.
            </div>
          )}

          <div className="row mt-3">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="marca">Marca del vehículo:</label>
                <input
                  placeholder='Ejm: Chevrolet, KIA, etc.'
                  type="text"
                  name="marca"
                  value={vehiculo.marca}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos1.includes('marca') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="modelo">Modelo:</label>
                <input
                  placeholder='Ejm: Vitara, Tucson'
                  type="text"
                  name="modelo"
                  value={vehiculo.modelo}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos1.includes('modelo') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="placa">Placa:</label>
                <input
                  placeholder='Ejm: XXXX-xxx'
                  type="text"
                  name="placa"
                  value={vehiculo.placa}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos1.includes('placa') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="nivelTanque">Nivel del tanque de gasolina:</label>
                <input
                  placeholder='Ejm: X%'
                  type="text"
                  name="nivelTanque"
                  value={vehiculo.nivelTanque}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos1.includes('nivelTanque') ? 'is-invalid' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-ms-12">
              <div className="form-group">
                <label htmlFor="estadoExterior">Estado exterior del vehiculo</label>
                <textarea
                  placeholder='Detallar abolladuras, rayones o cualquier dato relevante sobre el estado exterior del vehículo.'
                  name="estadoExterior"
                  value={vehiculo.estadoExterior}
                  onChange={handleInputChange}
                  className={`form-control ${camposInvalidos1.includes('estadoExterior') ? 'is-invalid' : ''}`}
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
