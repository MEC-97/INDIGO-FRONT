 import Carousel from 'react-bootstrap/Carousel';
import carrusel from "../assets/Mendoza.jpg"
import carrusel2 from "../assets/Mendoza2.jpg"
import carrusel3 from "../assets/Mendoza3.jpg"
//import "./Carusel.css"

function DarkVariantExample() {
  return (
  <div>
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
   <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
    <Carousel data-bs-theme="dark">
      
      <Carousel.Item>
        <img
          className=" w-100"
          src={carrusel}
          alt="First slide"
          width="500px" height="660px"
        />
        <Carousel.Caption className=' text-white'>
       
          <h1 className='fuente bg-success  text-white bg-opacity-50'>Experimenta Mendoza de la mejor manera</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className=" w-100"
          src={carrusel2}
          alt="First slide"
          width="100px"height="660px"
        />
        <Carousel.Caption className='text-white'>
        <h1 className='fuente bg-success  text-white bg-opacity-50'>Experimenta Mendoza de la mejor manera</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className=" w-100"
          src={carrusel3}
          alt="First slide"
          width="100px" height="660px"
        />
        <Carousel.Caption className='text-white'>
        <h1 className='fuente bg-success  text-white bg-opacity-50'>Experimenta Mendoza de la mejor manera</h1>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;