import React, {  useEffect, useState } from 'react';
import { buscarId } from '../redux/actions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import CenteredModal from '../component/Slider';
//import carrusel from "../assets/Mendoza.jpg";
import Navbar  from './Navbar';
import Footer from './Footer';
import WhatsappButton from "../component/WP"
import ReserveButton from "../component/Reserve"
import Loading from './Spinner'; 

function Detail() {

  const { id } = useParams();
  
  const idioma = useSelector((state) => state.idioma);
  const [modalShow, setModalShow] = React.useState(false);
  const producto = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(buscarId(id)).then(() => {
      setIsLoading(false); // Actualiza el estado a false después de cargar los datos
    });
 }, [dispatch, id]);


  useEffect(() => {
    dispatch(buscarId(id));
  }, [dispatch, id]);

  function getTextKey(idioma) {
    switch (idioma) {
      case 'es':
        return 'texto';
      case 'en':
        return 'textoin';
      case 'por':
        return 'textopor';
      default:
        return 'texto';
    }
  }

  const paragraphs = producto && producto[getTextKey(idioma)] ? producto[getTextKey(idioma)].split('@@@') : [];

  return (
    <div>
      {isLoading ? (
        <Loading /> 
      ) : (
        <>
          <Navbar/>
          <WhatsappButton/>
          <ReserveButton/> 
          <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img className="w-100" src={producto.imgdetalle} alt="First slide" width="500px" height="660px" />
                <Carousel.Caption className='text-white'>
                 <h1 className='fuente bg-success text-white bg-opacity-50'>  
                    {idioma === 'es' && producto.nombre} 
                    {idioma === 'en' && producto.nombrein}
                    {idioma === 'por' && producto.nombrepor}
                 </h1>
                 <Button variant="success" onClick={() => setModalShow(true)}>
                    Ver mas
                 </Button> 
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <CenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            experienceId={id}
          />
          <div className='container'> 
            <div className="justify-content-center">
              <br />
              <br />
              {paragraphs.map((paragraph, index) => (
                <h3 className='' key={index}>{paragraph}</h3>
              ))}
            </div>
          </div>
          <Footer/>
        </>
      )}
    </div>
 );
}

export default Detail;
