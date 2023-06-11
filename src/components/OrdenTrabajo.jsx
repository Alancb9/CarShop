import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const OrdenTrabajo = () => {
  const { state } = useContext(AppContext);
  const [fechaEntrega, setFechaEntrega] = useState('');
  const history = useNavigate();

  // const handleInputChange = (e) => {
  //   setFechaEntrega(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías realizar la lógica para generar la orden de trabajo final
    history('/exito'); // Volver al inicio después de la aprobación final
  };

  const handleAtrasClick = () => {
    history('/servicios');
  };

  // Obtener la fecha y hora actual
  const fechaGeneracion = new Date().toLocaleString();

  // Calcular la fecha estimada de entrega sumando 7 días a la fecha de generación
  const fechaEstimadaEntrega = new Date();
  fechaEstimadaEntrega.setDate(fechaEstimadaEntrega.getDate() + 7);
  const fechaEstimadaEntregaString = fechaEstimadaEntrega.toLocaleString();


  return (

    <div className="container">
      <h2 className="text-center my-3">Orden de trabajo</h2>

      <div className="form-container mb-4">
        <form onSubmit={handleSubmit} className="form-cliente">

          <div className="row mt-3">
            <div className="col-md-6 ps-3">
              <div id='cliente' className="form-section pe-1">
                <h3>Datos del cliente:</h3>
                <p><strong>Nombre:</strong> {state.cliente.nombre}</p>
                <p><strong>Email:</strong> {state.cliente.email}</p>
                <p><strong>Número de contacto:</strong> {state.cliente.contacto}</p>
                <p><strong>Tipo de identificación:</strong> {state.cliente.tipoIdentificacion}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-section">
                <h3>Datos del vehículo:</h3>
                <p><strong>Marca:</strong> {state.vehiculo.marca}</p>
                <p><strong>Modelo:</strong> {state.vehiculo.modelo}</p>
                <p><strong>Placa:</strong> {state.vehiculo.placa}</p>
                <p><strong>Nivel del tanque:</strong> {state.vehiculo.nivelTanque}</p>
              </div>
            </div>
          </div >

          <div id="estadoVehiculo" className="form-section">
            <p><strong>Estado exterior del vehiculo:</strong> {state.vehiculo.estadoExterior}</p>
          </div>

          <div id="serviciosSeleccionados" className="form-section">
            <p><strong>Servicios seleccionados:</strong></p>
            <ul>
              {state.servicios.map((servicio) => (
                <li key={servicio}>{servicio}</li>
              ))}
            </ul>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-section">
                <p><strong>Fecha de generación de orden:</strong> {fechaGeneracion}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-section">
                <p><strong>Fecha estimada de entrega:</strong> {fechaEstimadaEntregaString}</p>
              </div>
            </div>
          </div>

          <div id="botones" className="d-md-flex justify-content-md-end mt-4 mb-1">
            <button class="btn btn-primary me-md-2" type="button" onClick={handleAtrasClick}>Atrás</button>
            <button type="submit" className="btn btn-primary">Aprobar orden</button>
          </div>
        </form>
      </div>


    </div>

  );
};

export default OrdenTrabajo;
