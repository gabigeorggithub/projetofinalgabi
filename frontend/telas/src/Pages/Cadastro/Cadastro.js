import React, { useRef, useState } from 'react';
import Footer from '../../components/TelaLogin/Footer/Footer';
import HeaderSeta from '../../components/HeaderSeta/HeaderSeta';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Center, Text } from '@chakra-ui/react';
import './Cadastro.css'
import axios from 'axios';

const Cadastro = () => {
  // Inicializa dois estados para armazenar o email e a senha
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const tipo_usuario = useRef(null);

    // Função que lida com o envio do formulário
    const Cadastrar =  async (e) => {
      e.preventDefault()

      const credentials = {
        email, 
        senha,
        tipo_usuario: tipo_usuario.current.value
      };
        //,tipo_usuario, nome_empresa, telefone, endereco, numero_endereco, foto}
  
      axios.post('http://localhost:3008/api/user/create', credentials,{
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
      >Crie sua conta</Text>

        <p className='texto'>Preencha seus dados abaixo corretamente.</p>

      
        <form onSubmit={Cadastrar}>
          <Center>
          <div className='formulariooo'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder='nome@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div></Center>

          <Center>
          <div className='formulariooo'>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder='********'
              value={senha}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div></Center>

            <input
              type="hidden"
              value="Usuario"
              name='tipo_usuario'
              ref={tipo_usuario}
              // onChange={(e) => setTipoUsuario(e.target.value)}
            />

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

        >Criar conta</Button></Center></div>

        </form>
        </div>
        <Footer/>
        </>

  )
}
export default Cadastro;