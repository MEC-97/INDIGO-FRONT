import React from 'react';
import "./WP.css";
import whatsapp from "./icone-du-logo-whatsapp-vert.png";

function WhatsappButton() {
    return (
      <div className="btn-wsp">
        <a href="https://wa.me/542612658350" className="btn-wsp" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>
    );
}

export default WhatsappButton;