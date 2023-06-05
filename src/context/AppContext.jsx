import React, { createContext, useReducer } from 'react';
import { reducer } from './reducers.jsx';

const initialState = {
  cliente: {
    nombre: '',
    email: '',
    contacto: '',
    identificacionFiscal: '',
    tipoIdentificacion: '',
  },
  vehiculo: {
    marca: '',
    modelo: '',
    placa: '',
    nivelTanque: '',
    estadoExterior: '',
  },
  servicios: [],
  fechaEntrega: '',
};

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
