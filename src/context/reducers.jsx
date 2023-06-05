export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_CLIENTE':
        return {
          ...state,
          cliente: action.payload,
        };
      case 'SET_VEHICULO':
        return {
          ...state,
          vehiculo: action.payload,
        };
      case 'SET_SERVICIOS':
        return {
          ...state,
          servicios: action.payload,
        };
      case 'SET_FECHA_ENTREGA':
        return {
          ...state,
          fechaEntrega: action.payload,
        };
      default:
        return state;
    }
  };
  