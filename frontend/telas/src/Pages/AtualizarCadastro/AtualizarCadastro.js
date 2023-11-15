import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/TelaLogin/Footer/Footer';
import HeaderSeta from '../../components/HeaderSeta/HeaderSeta';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Center, Text } from '@chakra-ui/react';
// import './Cadastro.css'
import axios from 'axios';

const AtualizarCadastro = () => {
  // Inicializa dois estados para armazenar o email e a senha
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [userData, setUserData] = useState([]);
  const id = localStorage.getItem('@auth:user')

  useEffect(() => {
    const fetchData = async () => {
        const resonse = await await axios.get('http://localhost:3008/api/userById/' + id);
        if (resonse.data.success) {
            setUserData(resonse.data.data[0]);
        }
    }
    fetchData();
  }, []);

  const onChange = (e) => {
    setEmail(e.target.value);
  }

  const credentials = {
    email,
    senha
  }

    // Função que lida com o envio do formulário
    const AtualizarCadastro =  async (e) => {
      e.preventDefault()

      axios.put('http://localhost:3008/api/user/' + id,credentials,{
        headers:{
          'Content-Type': 'application/json',
        },
  
      })
      .then(response =>{
        alert(response.data.message)
        goToLogin()
      })
      .catch(error => console.log(error))
    };

  // Importa a função de roteamento do React Router
  const navigate = useNavigate();


  const goToLogin = () =>{
    navigate('/login')
  }

  return (
<>
    <HeaderSeta/>
    <div className='corpodatela'>
    <Text
      fontSize={30}
      textDecoration={'GrayText'}
      fontWeight={'bold'}
      lineHeight={'110%'}
      letterSpacing={'-2%'}  
      fontFamily={'sans-serif'}
      textAlign={'center'}
      >Atualize sua conta</Text>

        <p className='texto'>Preencha seus dados abaixo corretamente.</p>

      
        <form onSubmit={AtualizarCadastro}>
          <Center>
          <div className='formulariooo'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder={localStorage.getItem('email')}
              value={email}
              onChange={onChange}
            />
          </div></Center>

          <Center>
          <div className='formulariooo'>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder={'*******'}
              value={senha}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div></Center>


      <div>
        <Center>
        <Button
        type='submit'
        color='white'
        fontSize={20}
        letterSpacing={1}
        backgroundColor='#323232'
        variant='solid'
        justifyContent='center'
        alignItems='center'
        marginTop={30}
        width={'280px'}
        marginLeft={1}

        >Atualizar cadastro</Button></Center></div>

        </form>
        </div>
        <Footer/>
        </>

  )
}
export default AtualizarCadastro;