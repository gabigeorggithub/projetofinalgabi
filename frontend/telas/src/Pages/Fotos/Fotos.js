import React, { useEffect, useState, useRef } from "react";
import HeaderSeta from "../../components/HeaderSeta/HeaderSeta";
import './Fotos.css'
import logo from '../../assets/logohor.png'
import produto from '../../assets/comida.jpg'
import axios from "axios";
import botaoesquerda from '../../assets/esquerda.png'
import botaodireita from '../../assets/direita.png'
import Menu from "../../components/Menu/Menu";

function Fotos() {

  const [data, setData] = useState([])
  const carousel = useRef(null);

  const usuariosAdmin = async () => {
    await axios
      .get("http://localhost:3008/api/users")
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
      })
  }

  useEffect(() => {        
    usuariosAdmin();
  }, [])

  console.log(data)

  const handleDireitaClick = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    
  }
  const handleEsquerdaClick = (e) =>{
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;

  }

  return (
    <>
    <Menu/>
    <div className="body">
    <div className="container">

      <div className="carousel" ref={carousel}>

        {data.map((item) => {
          const {id, nome_empresa, endereco, numero_endereco, telefone, foto} = item;
        return(
        <div className="item" key={id}>


          <div className="image">     
            <img src={foto} alt='foto do local'/>
          </div>
          
          <div className="info">
            <span className="name">{nome_empresa}</span>
            <span className="oldPrice">{endereco}</span>
            <span className="price">{telefone}</span>
          </div>
        </div>
        );
        })}
      </div>

      <div className="buttons">
        <button onClick={handleEsquerdaClick}>
          <img src={botaoesquerda} alt="esquerda"/>
        </button>

        <button onClick={handleDireitaClick}>
          <img src={botaodireita} alt="direita"/>
        </button>

      </div>
    </div>
    </div>
    </>
  );
}

export default Fotos;