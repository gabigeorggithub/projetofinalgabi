import React, { useEffect, useState, useRef } from "react";
import HeaderSeta from "../../components/HeaderSeta/HeaderSeta";
import './Carousel.css'
import logo from '../../assets/logohor.png'
import produto from '../../assets/comida.jpg'
import likerosa from '../../assets/likerosa.png'
import comida from '../../assets/comida.jpg'
import whats from '../../assets/whats.png'
import insta from '../../assets/insta.png'
import axios from "axios";
import botaoesquerda from '../../assets/esquerda.png'
import botaodireita from '../../assets/direita.png'
import Like from "../../components/botaolike/botaolike";
import Header from "../../components/TelaLogin/Header/Header";
import Menu from "../../components/Menu/Menu";
import { Center, Text } from "@chakra-ui/react";


function PrincipalUsuario() {

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

  console.log(data)

  return (
    <>
    <Menu/>
    <div className="body">
    <div className="container">
      <div className="carousel" ref={carousel}>

        {data.map((item) => {
          const {id, nome_empresa, endereco, instagram, telefone, foto} = item;
          const base64Image = `data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(foto)))}`;

           // Convert image to base64
          //  const base64Image = `data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(foto)))}`;

        return(
        <div className="item" key={id}>

          
          <div className="info">
            <span className="name">{nome_empresa}</span>
            <div><span className="oldPrice">{endereco}</span></div>
            <div className="image">
            <Center><img src={base64Image} alt='foto do local' className="fotodaempresa1"/></Center>
            {/* <img src={foto} alt='foto do local' className="fotodaempresa"/> */}
          </div>
            <div className="whatsapp">
            <img src={whats} className="foto-whats"></img>
              <Text
            fontSize={22}
            textDecoration={'GrayText'}
            lineHeight={'110%'}
            fontFamily={'sans-serif'}
            textAlign={'center'}
            marginTop={1}
            marginLeft={1}
            >{telefone}</Text>
            </div>

            <div className="instagram">
            <img src={insta} className="foto-whats"></img>
            <Text
            fontSize={22}
            textDecoration={'GrayText'}
            lineHeight={'110%'}
            fontFamily={'sans-serif'}
            textAlign={'center'}
            marginTop={1}
            marginLeft={1}
            >{instagram}</Text>
          </div>


          </div>

          <Like 
              idEmpresa={ id }
              icon={ likerosa }                   
                    />
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

export default PrincipalUsuario;