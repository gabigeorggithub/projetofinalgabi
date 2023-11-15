import './NovaSenha.css'
import { useState } from "react";
import Footer from "../../components/TelaLogin/Footer/Footer";
import HeaderSeta from "../../components/HeaderSeta/HeaderSeta";
import { Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";



function NovaSenha() {

  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Senha:', password);
    // Limpar os campos de entrada após o envio
    setPassword('');
  };



  const navigate = useNavigate();
  const goToLogin = ()=>{
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
      >Nova senha</Text>

<Text
      fontSize={18}
      marginTop={5}
      textAlign={'center'} 
      >Informe uma nova senha</Text>
<Text
      fontSize={18}
      textAlign={'center'} 
      marginBottom={7}
      >para esta conta.</Text>

        <div className='formulario'>
          <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Nova senha:</label>
            <input
              type="password"
              id="password"
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        onClick={goToLogin}>Entrar</Button></Center></div></div>
      <Footer/>

    </>

  );
}
export default NovaSenha;