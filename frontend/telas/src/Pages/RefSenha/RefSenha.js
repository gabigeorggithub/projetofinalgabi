import './RefSenha.css'
import { useState } from "react";
import Footer from "../../components/TelaLogin/Footer/Footer";
import HeaderSeta from "../../components/HeaderSeta/HeaderSeta";
import { Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";



function RefSenha() {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    // Limpar os campos de entrada após o envio
    setEmail('');
  };



  const navigate = useNavigate();
  const goToNovaSenha = ()=>{
    navigate('/novasenha')
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
      >Redefinir sua senha</Text>

<Text
      fontSize={18}
      padding={5}     
      textAlign={'center'} 
      >Informe o email para o qual deseja redefinir sua senha.</Text>

        <div className='formulario'>
          <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder='nome@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /></div>
            </form>
            </div>
      <div>
        <Center>
        <Button
        color='white'
        fontSize={20}
        letterSpacing={1}
        backgroundColor='#323232'
        variant='solid'
        justifyContent='center'
        alignItems='center'
        marginTop={70}
        width={'280px'}
        marginLeft={1}
        // if o email estiver no banco de dados, enviar email
        onClick={goToNovaSenha}>Enviar</Button></Center></div></div>
      <Footer/>

    </>

  );
}
export default RefSenha;
