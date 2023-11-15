import './Relatorio.css'
import { useEffect, useState } from "react";
import Footer from "../../components/TelaLogin/Footer/Footer";
import HeaderSeta from "../../components/HeaderSeta/HeaderSeta";
import { Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import axios from 'axios';



function Relatorio() {
  const id = localStorage.getItem('@auth:user');
  const [data, setData] = useState([]);
  const [uniqueUserIds, setUniqueUserIds] = useState(new Set());

  const relatorio = async () => {
    await axios
      .get("http://localhost:3008/api/relatoriofavorites/" + id)
      .then((res) => {
        console.log(res.data.data);

        // Crie um conjunto para armazenar IDs únicos
        const uniqueIds = new Set();

        // Passe pelos dados e adicione os IDs ao conjunto
        res.data.data.forEach((item) => {
          uniqueIds.add(item.id_usuario);
        });

        // Atualize o estado com os dados e os IDs únicos
        setData(res.data.data);
        setUniqueUserIds(uniqueIds);
      });
  };

  useEffect(() => {
    relatorio();
  }, []);

  console.log(data);
  console.log(uniqueUserIds.size); // Isso mostrará a contagem de IDs únicos

  return (
    <>
      <HeaderSeta />
      <div className='container34'>
        <Text
          fontSize={40}
          textDecoration={'GrayText'}
          fontWeight={'bold'}
          lineHeight={'110%'}
          letterSpacing={'-2%'}
          fontFamily={'sans-serif'}
          textAlign={'center'}
          marginTop={3}
          marginBottom={2}
        >Parabéns!</Text>
        <p className='quantia'>Sua empresa foi favoritada por</p>

        <Text
          fontSize={50}
          textDecoration={'GrayText'}
          fontWeight={'bold'}
          lineHeight={'110%'}
          letterSpacing={'-2%'}
          fontFamily={'sans-serif'}
          textAlign={'center'}
          marginTop={3}
          marginBottom={2}
        >{uniqueUserIds.size}</Text>
        <p>usuários da nossa plataforma.</p>
      </div>
    </>
  );
}

export default Relatorio;
