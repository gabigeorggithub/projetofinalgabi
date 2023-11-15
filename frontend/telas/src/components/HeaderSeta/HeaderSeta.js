import React from 'react';
import './HeaderSeta.css';
import seta from "../../../src/assets/seta.png";
import { useNavigate } from 'react-router-dom';


function HeaderSeta() {

  const navigate = useNavigate()

  const goBack=()=>{
      navigate(-1)
  }

  return (
    <header className="header-container">
        <div className="left-section">
            <img
              src={seta}
              alt="seta"
              className="seta"
              onClick={goBack}
            />
        </div>
    </header>
  );
};

export default HeaderSeta;
