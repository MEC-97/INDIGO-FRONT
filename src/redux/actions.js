import axios from "axios"
//import { json } from "react-router-dom"
//import {URL} from '../constantes'
export const BUSCAR_PERSONAJE_ID = 'BUSCAR_PERSONAJE_ID'
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const TRADUCCIONES = "TRADUCCIONES"
export const SET_IDIOMA = "SET_IDIOMA"

export const traducciones = () => {
    return async function (dispatch) {
        const { data } = await axios.get('https://indigo-back-dusky.vercel.app/experiencias/traducciones');
         // console.log('Datos de productos:', data);
           dispatch({
         type: TRADUCCIONES,
          payload: data
      });

    };
}

export function setIdioma(idioma) {
    return {
      type: 'SET_IDIOMA',
      payload: idioma,
    };
  }

export const buscarId = (id)=>{
    return async function(dispatch){
        try {
        const resApi = await axios(`https://indigo-back-dusky.vercel.app/experiencias/${id}`)
         if(resApi.data){
         return dispatch({
                type:BUSCAR_PERSONAJE_ID,
                payload:resApi.data
            })
        }
        } catch (error) {
            console.log(error);
        }  
    } 
}
export const getProductos = () => {
    return async function (dispatch) {
        const { data } = await axios.get('https://indigo-back-dusky.vercel.app/experiencias');
         // console.log('Datos de productos:', data);
           dispatch({
         type: GET_ALL_PRODUCTS,
          payload: data
      });

    };
  }
  
 
  
    
    

