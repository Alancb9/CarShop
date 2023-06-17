import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import  TituloForm from '../components/titulos/TituloForm.jsx';
// AWS
import AWS from 'aws-sdk';
// AWS

// AWS credenciales
AWS.config.update({
  accessKeyId: 'ASIAWTCW45KDNZ5ZON7Q',
  secretAccessKey: 'NnNAZQ/4/xvvjfmXHFcoTfJ5jLiaJa3+kFrl+ZGy',
  region: 'us-east-1',
  sessionToken: 'FwoGZXIvYXdzEAwaDJvGL9+cImem1btSdSK+AcIHpZ59btuZTqJnMXPvoJ4OP8PsRUxiSjR0sYArQZ37KMLou9Rox/arQ9Dq00IcFBuVFM+pjWu5zwmeIF8kGhahe9lhEbX56fK4l42zhHQ5XMd6SXQ/kvgEGbXkOZWN3dXKaimHmxDq5AU5NikLbKTGjS70N+skv6tiONmRlECutc3SBcKMja14qBH8+DJerQap+WRamKghCsJslNqH4kK2Z28X6UpVm7DoipGv4oplyWSZBIDnN/ydXzbkZ+Uo/Le0pAYyLaKFqheuloo7/J2q7tpdW8aYyUdaIow3EUpQzxlM2mW9zyn+sHZkCqV5er2l9w=='
  });
// AWS

const OrdenTrabajo = () => {
  const { state } = useContext(AppContext);
  const history = useNavigate();
  // AWS
  const dynamo = new AWS.DynamoDB();
  // AWS

  // Obtener la fecha y hora actual
  const fechaGeneracion = new Date().toLocaleString();

  // Calcular la fecha estimada de entrega sumando 7 días a la fecha de generación
  const fechaEstimadaEntrega = new Date();
  fechaEstimadaEntrega.setDate(fechaEstimadaEntrega.getDate() + 7);
  const fechaEstimadaEntregaString = fechaEstimadaEntrega.toLocaleString();

  // AWS
  const lista = [];
  state.servicios.map((servicio) => (
    lista.push({S: servicio})
  ))
  // AWS Atributos
  var params = {
    TableName: 'formulario',
    Item:{
      'cliente': {S: state.cliente.nombre},
      'email': {S: state.cliente.email},
      'estadoVehiculo': {S: state.vehiculo.estadoExterior},
      'fechaEntrega': {S: fechaEstimadaEntregaString},
      'fechaOrden': {S: fechaGeneracion},
      'identificacion': {S: state.cliente.identificacion},
      'marca': {S: state.vehiculo.marca},
      'modelo': {S: state.vehiculo.modelo},
      'nivelTanque': {S: state.vehiculo.nivelTanque},
      'numeroContacto': {S: state.cliente.contacto},
      'placa': {S: state.vehiculo.placa},
      'serviciosSeleccionados': {L: lista},
      'tipoIdentificacion': {S: state.cliente.tipoIdentificacion}

    }
  };


  const putDynamoElements = (e) => {
    dynamo.putItem(params, function(err, data){
      if (err) {
        console.log("Error", err);
      } else {
        console.log(data);
      };
    });
  // AWS

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // AWS
    putDynamoElements();
    // AWS

    history('/exito'); // Ir A la pagina de exito
  };

  const handleAtrasClick = () => {
    history('/servicios');
  };

  


  return (

    <div className="container my-4">
      <TituloForm className={'text-center'} text='Orden de trabajo'/>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-cliente">

          <div className="row mt-3">
            <div className="col-md-6">
              <div id='cliente' className="form-section pe-1 ps-5">
                <h3>Datos del cliente:</h3>
                <p><strong>Nombre:</strong> {state.cliente.nombre}</p>
                <p><strong>Email:</strong> {state.cliente.email}</p>
                <p><strong>Número de contacto:</strong> {state.cliente.contacto}</p>
                <p><strong>{state.cliente.tipoIdentificacion}: </strong> {state.cliente.identificacion}</p>
              </div>
            </div>
            <div className="col-md-6 ps-5">
              <div className="form-section">
                <h3>Datos del vehículo:</h3>
                <p><strong>Marca:</strong> {state.vehiculo.marca}</p>
                <p><strong>Modelo:</strong> {state.vehiculo.modelo}</p>
                <p><strong>Placa:</strong> {state.vehiculo.placa}</p>
                <p><strong>Nivel del tanque:</strong> {state.vehiculo.nivelTanque}</p>
              </div>
            </div>
          </div >

          <div id="estadoVehiculo" className="form-section ps-5">
            <p><strong>Estado exterior del vehiculo:</strong> {state.vehiculo.estadoExterior}</p>
          </div>

          <div id="serviciosSeleccionados" className="form-section ps-5">
            <p><strong>Servicios seleccionados:</strong></p>
            <ul>
              {state.servicios.map((servicio) => (
                <li key={servicio}>{servicio}</li>
              ))}
            </ul>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-section  ps-5">
                <p><strong>Fecha de generación de orden:</strong> {fechaGeneracion}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-section  ps-5">
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
