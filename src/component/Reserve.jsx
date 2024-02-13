import React from 'react';
import { Button } from 'react-bootstrap';
import './Reserve.css';

function ReserveButton() {
  const reserveFormUrl = "https://docs.google.com/forms/d/17g5UVsG88itwvvgNbaNH6cjI4tvsh4FV-A8Jv-KSkzU";

  return (
    <div className="reserve-button-container">
      <Button variant="success" href={reserveFormUrl}>
          Reserva ahora
      </Button>
    </div>
  );
}

export default ReserveButton;