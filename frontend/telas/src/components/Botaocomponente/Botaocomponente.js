import React from 'react';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function Botaocomponente({botaoUsuario, botaoEmpresa, criarconta}) {
  // console.log(props)

  const navigate = useNavigate()

  const goToCadastro = ()=>{
      navigate('/Cadastro')
  }
  
  const goToCadastroEmpresa = ()=>{
      navigate('/CadastroEmpresa')
  }

  return (
    <>
      {/* <button type="submit">{props.nome}</button> */}
      {/* <button>{props.nome}</button> */}
      {/* <Stack direction='column' spacing={2} align='center'> */}
      <div>
        <Button 
          color='white'
          backgroundColor= '#323232'
          variant='solid'
          flexDirection='column'
          onClick={goToCadastro}
          >
        {botaoUsuario}
        </Button></div>

        <Button 
        color='white'
        backgroundColor='#323232'
        colorScheme='teal' 
        variant='solid'
        flexDirection='column'
        onClick={goToCadastroEmpresa}
        >
        {botaoEmpresa}
        </Button>

        {/* <Button 
        colorScheme='teal' 
        variant='solid'
        onClick={goToCadastro}
        >
        {criarconta}
        </Button> */}

      {/* </Stack> */}
    </>
  );
}

export default Botaocomponente;

