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
    <div>
      <h2>Orden de trabajo</h2>
      <form onSubmit={handleSubmit}>
        {/* Mostrar información ingresada para confirmación */}
        {/* Campo de fecha y hora estimada de entrega */}
        <h3>Datos del cliente:</h3>
        <p>Nombre: {state.cliente.nombre}</p>
        <p>Email: {state.cliente.email}</p>
        <p>Número de contacto: {state.cliente.contacto}</p>
        <p>Tipo de identificación: {state.cliente.tipoIdentificacion}</p>

        <h3>Datos del vehículo:</h3>
        <p>Marca: {state.vehiculo.marca}</p>
        <p>Modelo: {state.vehiculo.modelo}</p>
        {/* <p>Año: {state.vehiculo.ano}</p> */}
        <p>Placa: {state.vehiculo.placa}</p>

        <h3>Servicios seleccionados:</h3>
        <ul>
          {state.servicios.map((servicio) => (
            <li key={servicio}>{servicio}</li>
          ))}
        </ul>

        <p>Fecha de generación de orden: {fechaGeneracion}</p>
        <p>Fecha estimada de entrega: {fechaEstimadaEntregaString}</p>

        <button type="submit" >
          Aprobar orden
        {/* {ordenGenerada ? 'Orden generada' : 'Aprobar orden'} */}
        </button>
      </form>
      <button onClick={handleAtrasClick}>Atrás</button>
    </div>
  );
};

export default OrdenTrabajo;
