import React from 'react';
import logoh from "../../../assets/logohor.png";

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'white',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    
  };

  return (
    <footer style={footerStyle}>
      {/* ajeitar esse center: */}
      <center><img src={logoh} width='125px' height='42px' alt="Logo"></img></center> 
    </footer>
  );
};

export default Footer;
