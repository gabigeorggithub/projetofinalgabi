import React from 'react';
import './HeaderSenha.css';
import seta from "../../../assets/seta.png";

const HeaderSenha = () => {
  const handleSetaClick = () => {
    // Aqui você pode adicionar o código que deseja executar quando a imagem de seta for clicada
    console.log('Imagem de seta clicada');
  };

  return (
    <header className="header-container">
      <div className="left-section">
        <a href=''>
          <img
            src={seta}
            alt="seta"
            className="seta"
            onClick={handleSetaClick}
          />
        </a>
      </div>
    </header>
  );
};

export default HeaderSenha;
