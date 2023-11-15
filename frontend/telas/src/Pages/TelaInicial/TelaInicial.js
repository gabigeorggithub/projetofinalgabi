import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/TelaLogin/Header/Header';
import Footer from '../../components/TelaLogin/Footer/Footer';
import '../../components/Botaocomponente/Botaocomponente.css'
import { Button, Center } from '@chakra-ui/react';
import { Text } from "@chakra-ui/react"
import './TelaInicial.css'


function TelaInicial() {
  const navigate = useNavigate()

  const goToCadastro = () => {
    navigate('/Cadastro')
  }

  const goToCadastroEmpresa = () => {
    navigate('/CadastroEmpresa')
  }
  const goToLogin = () => {
    navigate('/login')
  }


  return (
    <>
      <Header/>
    <div className='corpo'>
      <Text
      fontSize={20}
      textDecoration={'GrayText'}
      fontWeight={'bold'}
      lineHeight={'110%'}
      // letterSpacing={1}  
      fontFamily={'sans-serif'}
      padding={4}
      textAlign={'center'}
    
      >Quer saber para onde ir na sua viagem à Canela?</Text>

<Text
      fontSize={20}
      fontWeight={'bold'}
      lineHeight={'110%'}
      letterSpacing={'-2%'}  
      fontFamily={'sans-serif'}
      textAlign={'center'}
      
      >VEM PRO SOS GO</Text>

      <Text
      fontSize={18}
      padding={5}     
      textAlign={'center'} 

      >Quero me cadastrar no SOS GO como:</Text>

      <Center>
        <div>
          <Button
            color='white'
            backgroundColor='#323232'
            variant='solid'
            justifyContent='center'
            alignItems='center'
            justifyItems={'center'}
            width={'200px'}
            letterSpacing={1}
            fontSize={20}
            fontFamily={'sans-serif'}
            onClick={goToCadastro}>USUÁRIO
          </Button>
        </div>
      </Center>

      <Center
      padding={2}
      >
      <div>
      <Button
        color='white'
        backgroundColor='#323232'
        variant='solid'
        justifyContent='center'
        alignItems='center'
        width={'200px'}
        letterSpacing={1}
        justifyItems={'center'}
        fontSize={20}
        fontFamily={'sans-serif'}
        onClick={goToCadastroEmpresa} >EMPRESA
        </Button>
        </div>
        </Center>

        <Text
      fontSize={18}
      padding={3}
      textDecoration={'underline'}     
      onClick={goToLogin} 
      textAlign={'center'}
      >Já sou cadastrado</Text>

</div>

      <Footer />
    </>
  );
};

export default TelaInicial;