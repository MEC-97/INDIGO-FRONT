import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from  'react-redux'
import { connect } from 'react-redux';

import "./cards.css" 
import { Link } from 'react-router-dom';
import { getProductos } from '../redux/actions';
 
function Cards({ idioma }) {


  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.Productos || [])
  

  useEffect(() => {
    dispatch(getProductos())
  }, [dispatch]);

    
  return (
    <>
    {allProducts.experiecias.map((product) => (
   <>
      <div class="card" key={product.id}>
        <Link to={`/Detail/${product.id}`}>
          <img src={product.imgcard} width="400px" height="300px" />
          <div class="card__content">
          <p class="card__title text-white">
              {idioma === 'es' && product.nombre}
              {idioma === 'en' && product.nombrein}
              {idioma === 'por' && product.nombrepor}
            </p>
          </div>
        </Link>
      </div>
   </>
  
))}
</>
  );
}
const mapStateToProps = (state) => ({
  idioma: state.idioma,
});

export default connect(mapStateToProps)(Cards);

 