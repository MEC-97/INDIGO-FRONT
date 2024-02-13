import React from 'react';
import Cards from './Card';
import "./CardsContainer.css"


function CardContainer({ producto }) {
    console.log(producto)

    return (
      <div className="card-container">
          <Cards />
      </div>
    );
}
  
  
export default CardContainer;