import React, { createContext, useReducer, useEffect } from 'react';
import { reducer } from './reducers.jsx';

const initialState = {
  cliente: {
    nombre: '',
    email: '',
    contacto: '',
    tipoIdentificacion: '',
    identificacion: '',
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

  // Recuperar datos del Local Storage al cargar el componente
  useEffect(() => {
    const storedData = localStorage.getItem('appData');
    if (storedData) {
      dispatch({ type: 'RESTORE_DATA', payload: JSON.parse(storedData) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appData', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
