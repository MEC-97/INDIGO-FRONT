  import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos } from '../redux/actions';
import Navbar from './Navbar';
import ContextualExample from './Spinner';
import CardContainer from './Cards';
import DarkVariantExample from "./Carrusel"
import Footer from './Footer';
import imagen from '../assets/nieve.jpeg';
import WhatsappButton from "../component/WP"
import ReserveButton from "../component/Reserve"
import "./Home.css"

export default function Home() {

  const idioma = useSelector((state) => state.idioma);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.Productos || []); 

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getProductos())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        
      });
  }, [dispatch]);
 
  return ( 
    <>
    <div className='fondo tracking-in-expand'>
      <Navbar />
      <WhatsappButton/>
      <ReserveButton/>
      
<DarkVariantExample/>

<hr class="featurette-divider"/>

<>
{allProducts.experiecias && allProducts.experiecias.length > 0 && (
  <> 
<div class="row featurette" key={allProducts.experiecias[0].id}>
    <div class="col-7 text-center">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
        <h1 class="featurette-heading fs-1 fw-bold " className='fuente  text-success'>Turismo Índigo</h1>
        <h4 class="mx-auto d-flex fw-semibold  bg-success bg-opacity-25 text-success" style={{width: "500px"}}>
        {idioma === 'es' && allProducts.experiecias[0].presentacion1}
        {idioma === 'en' && allProducts.experiecias[0].presentacion1in}
        {idioma === 'por' && allProducts.experiecias[0].presentacion1por}
          </h4>
        <h4 class="mx-auto p-2 fw-semibold  bg-success bg-opacity-25 text-success" style={{width: "500px"}}>
        {idioma === 'es' && allProducts.experiecias[0].presentacion2}
        {idioma === 'en' && allProducts.experiecias[0].presentacion2in}
        {idioma === 'por' && allProducts.experiecias[0].presentacion2por}
        </h4>
    </div>  
      <div class="col-md-5">
      <img src={imagen} alt="Logo" width= "500px" height= "300px"  />
      </div>
    </div>
   </> 
  )}  
</>
    <hr class="featurette-divider"></hr>
      {isLoading ? (
        <ContextualExample/>
       ) : (
       
        <>
         <h2 class=" fuente experiencias featurette-heading fs-1 fw-bold ">Vivi nuestaras experiencias</h2>
         <div className="container"> 

           
             <div className="col-xxl"> {/* Adjust the number based on how many cards you want per row */}
               <CardContainer  />
              </div>
           
            
          </div>
          <Footer className='footer tracking-in-expand'/>
        </>
      
       )
      }
      </div>
    </>
    
  );
}
