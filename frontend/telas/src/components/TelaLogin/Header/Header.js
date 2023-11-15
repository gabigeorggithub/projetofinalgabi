import logoImage from "../../../assets/logo.png"
import React from 'react';
import './Header.css'; // Certifique-se de ter um arquivo Header.css para estilos

function Header() {
  return (
    <div className="header-container">
      <img src={logoImage} alt="iPhone SE" className="header-image" />
    </div>
  );
}

export default Header;
