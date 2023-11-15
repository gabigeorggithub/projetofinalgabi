import React, { useEffect, useState } from 'react';
// import './Menu.css';
import menuIcon from '../../assets/menu.png';
import local from '../../assets/local.png';
import like from '../../assets/like.png';
import trash from '../../assets/trash.png';
import sair from '../../assets/sair.png';
import { useNavigate } from 'react-router-dom';
import user from '../../assets/user.png'
import logout from '../../assets/logout.png'
import relatorio from '../../assets/relatorio.png'

const MenuEmpresa = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsUserMenuOpen(false); // Fechar o menu do usuário
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  const editarconta = () => {
    console.log(localStorage)
    const tipo_usuario = localStorage.getItem('tipousuario')
    if (tipo_usuario === "Usuario") {
      navigate('/atuca');
    } else{
      console.log(localStorage)
      navigate('/atucaemp')
    }
  };

  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('@auth:token')
    if(!token){
    navigate('/')
    }

  }, [navigate])

  const handleLogOut = () =>{
    localStorage.removeItem('@auth:token')
    localStorage.removeItem('email')
    navigate('/')
  }

  const goToLike = () => {
    navigate('/goToLike')
  }
  const goTorelatorio = () =>{
    navigate('/relatorio')
  }

  return (
    <div className="header">
      <img src={menuIcon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
      <div className="corner-content">
          <img src={local} alt="Corner" className="corner-image" />
          <p>Canela - RS</p>
        </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><img onClick={goTorelatorio} src={relatorio} alt="Corner" className="corner-image" /></li>
          <li><img onClick={editarconta} src={user} alt="Corner" className="corner-image" /></li>
          <li><img onClick={handleLogOut} src={logout} alt="Corner" className="corner-image" /></li> 
          <li><img onClick={closeMenu} src={sair} alt="Corner" className="corner-image" /></li> {/* Botão para fechar o menu */}
          
        </ul>

      </nav>
    </div>
  );
};

export default MenuEmpresa;