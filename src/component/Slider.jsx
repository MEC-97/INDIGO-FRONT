import React, { useEffect } from 'react';
import {useSelector, useDispatch } from  'react-redux'
import { getProductos } from '../redux/actions';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function CenteredModal({ experienceId, ...props }) {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.Productos || [])
 
  useEffect(() => {
    dispatch(getProductos())
  }, [dispatch]);

  useEffect(() => {
    if (experienceId) {
      dispatch(getProductos(experienceId)); // Dispatch action with the experience ID
    }
  }, [dispatch, experienceId]);

  const experiences = allProducts.experiecias || [];

  const experienceIdToUse = typeof experiences[0]?.id === 'number' ? parseInt(experienceId, 10) : experienceId;


  const experience = experiences.find(exp => exp.id === experienceIdToUse);




  const experienceImages = experience ? experience.imggaleria : [];

 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='bg-opacity-50' closeButton>
      </Modal.Header>
      <Modal.Body>  
      <Carousel data-bs-theme="dark">
          {experienceImages.map((img, imgIndex) => (
            <Carousel.Item key={imgIndex}>
              <img className="w-100" src={img} alt={`Slide ${imgIndex+1}`} width="500px" height="660px" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
 }
 
 export default CenteredModal;
 
