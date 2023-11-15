import React, { useState } from 'react';
import './LoginForm.css';
// import { Button } from '@chakra-ui/react';
// import RefSenha from '../../../Pages/RefSenha/RefSenha';
import Botaocomponente from '../../Botaocomponente/Botaocomponente';
import { json, useNavigate } from 'react-router-dom';
import { Button, Center } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import TelaInicial from '../../../Pages/TelaInicial/TelaInicial';
import axios from 'axios';

const LoginForm = () => {
  // Inicializa dois estados para armazenar o email e a senha
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [senha, setPassword] = useState('');

  const saveUserInfoLocalStorage = (token) => {
    
    
  }

    // Função que lida com o envio do formulário
    const handleSubmit = (e) => {
      e.preventDefault()

      const credentials = {email, senha}
  
      axios.post('http://localhost:3008/api/auth/login', credentials,{
        headers:{
          'Content-Type': 'application/json',
        },
  
      })
      .then(response =>{
        alert(response.data.message)
        const tipoUsuario = response.data.data[0].tipo_usuario;
        alert(tipoUsuario)

        //saveUserInfoLocalStorage(response.data.token)
        localStorage.setItem('@auth:user', response.data.data[0].id)
        localStorage.setItem('tipousuario', response.data.data[0].tipo_usuario)
        localStorage.setItem('@auth:token', response.data.data[0].token)
        localStorage.setItem('email', response.data.data[0].email)
        //console.log(response.data.data[0].tipo_usuario)
        if (tipoUsuario === "Usuario") {
          goToPrincipalUsuario();
        } else{
          goToPrincipalEmpresa();
        }


        // tipoUsuario === 'Usuario' ? goToPrincipalUsuario() : goToPrincipalEmpresa()
        
      })
      .catch(error => console.log(error))
    };

  // Importa a função de roteamento do React Router
  const navigate = useNavigate();

  // Função para navegar para a página 'RefSenha'
  const goToRefSenha = () => {
    navigate('/RefSenha');
  };

  // Função para navegar de volta para a página inicial
  const goToTelaInicial = () => {
    navigate('/telainicial');
  };

  const goToCadastro = () =>{
    navigate('/cadastro')
  }

  // Função para voltar para a página anterior
  const goBack = () => {
    navigate(-1);
  };

  const goToPrincipalUsuario = () => {
    navigate('/principalusuario')
  }
  const goToPrincipalEmpresa = () => {
    navigate('/principalempresa')
  }

  // Renderiza o conteúdo do componente
  return (
   
    <div className='corpo'>
      
      <div className="login-page">
      <Center>
        <div className="login-form">
          <Text
            fontSize={40}
            textDecoration={'GrayText'}
            fontWeight={'bold'}
            lineHeight={'110%'}
            letterSpacing={'-2%'}  
            fontFamily={'sans-serif'}
            textAlign={'center'}
            marginBottom={-1}
          >Login</Text>
          <p>Entre para continuar</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder='nome@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                placeholder='********'
                value={senha}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              {/* Botão para entrar */}
              <Button
                color='white'
                type='submit'
                fontSize={20}
                letterSpacing={1}
                backgroundColor='#323232'
                variant='solid'
                justifyContent='center'
                alignItems='center'
                marginTop={3}
                width={'280px'}
                marginLeft={1}
                >Entrar</Button>
            </div>
          </form>
          {/* Link para redefinir senha */}
          <Text
            textDecoration={'underline'}     
            onClick={goToRefSenha} 
            textAlign={'center'}
          >Esqueceu sua senha?</Text>
          {/* Link para voltar para a página anterior */}
          <Text
            textDecoration={'underline'}     
            onClick={goToTelaInicial} 
            textAlign={'center'}
            marginTop={-2}
          >Não tem uma conta? Cadastre-se</Text>
        </div>
        </Center>
      </div>
    </div>
    
  );
};

export default LoginForm;
