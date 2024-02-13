import { GET_ALL_PRODUCTS, BUSCAR_PERSONAJE_ID, TRADUCCIONES, SET_IDIOMA} from "./actions";

const initialState = {
  Productos: [],
  detail: [],
  idioma: 'es',
}

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case TRADUCCIONES: 
    return {
      ...state,
      Productos: payload,
    }
    case SET_IDIOMA :
      return {...state, idioma: payload};
     
    case GET_ALL_PRODUCTS:
  //console.log("Datos recibidos en payload:", payload); // Verificar los datos recibidos
  return {
    ...state,
    Productos: payload,
  };


    case BUSCAR_PERSONAJE_ID:
      return { ...state, detail: payload }

    default:
      return { ...state }
  };
}
