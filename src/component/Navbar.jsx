import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import indigo from "../assets/indigo.png";

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIdioma } from '../redux/actions';
import esFlag from '../assets/españa.png';
import enFlag from '../assets/eeuu.png';
import porFlag from '../assets/brasi.png'; 
import './Navbar.css';

 
function NavBar({ setIdioma }) {
  
  return (
    <>
      <Navbar expand="lg" className="navbar-light fixed-top">
        
      <Container>
      <Link to={`/`}>
        <Navbar.Brand > <img src={indigo} alt="Logo" width= "186px" height= "60px"  /> </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <div className="flag-buttons-container">
          <button onClick={() => setIdioma('es')} className="flag-button">
            <img src={esFlag} alt="ES" width="30" height="20" />
          </button>
          <button onClick={() => setIdioma('en')} className="flag-button">
            <img src={enFlag} alt="EN" width="30" height="20" />
          </button>
          <button onClick={() => setIdioma('por')} className="flag-button">
            <img src={porFlag} alt="POR" width="30" height="20" />
          </button>
        </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default connect(null, { setIdioma })(NavBar);