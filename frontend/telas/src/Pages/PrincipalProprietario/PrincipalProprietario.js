import React, { useEffect, useState } from "react";
import MenuEmpresa from "../../components/MenuEmpresa/MenuEmpresa";
import axios from "axios";
import { Center, Text } from "@chakra-ui/react";
import whats from '../../assets/whats.png'
import './PrincipalProprietario.css'
import comida from '../../assets/comida.jpg'
import insta from '../../assets/insta.png'
import edit from '../../assets/edit.png'
import { useNavigate } from "react-router-dom";

function PrincipalProprietario() {
  const [data, setData] = useState([])
  const id = localStorage.getItem('@auth:user')

  const navigate = useNavigate();

  const goToEdit = () =>{
    navigate('/atucaemp')
  }

  const usuarioEmpresa = async () => {
    await axios
      .get("http://localhost:3008/api/userById/" + id)
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
      })
  }

  useEffect(() => {
    usuarioEmpresa();
  }, [])

  return (
    <>
      <MenuEmpresa />
      <div className="tudo">
        {data.map((item) => {
          const { id, nome_empresa, endereco, instagram, telefone, foto } = item;
          return (
            <div className="item" key={id}>
              <div className="info">
                <span className="name">{nome_empresa}</span>
                <div><span className="oldPrice">{endereco}</span></div>
                <div className="image-container">
                  <Center><img src={comida} alt='foto do local' className="fotodaempresa1" /></Center>
                  <img src={edit} alt="edit" className="edit-icon" onClick={goToEdit}/>
                </div>
                <div className="whatsapp">
                  <img src={whats} className="foto-whats" alt="WhatsApp" />
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
                  <img src={insta} className="foto-whats" alt="Instagram" />
                  <Text
                    fontSize={22}
                    textDecoration={'GrayText'}
                    lineHeight={'110%'}
                    fontFamily={'sans-serif'}
                    color={'black'}
                    textAlign={'center'}
                    marginTop={1}
                    marginLeft={1}
                  >{instagram}</Text>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PrincipalProprietario;
