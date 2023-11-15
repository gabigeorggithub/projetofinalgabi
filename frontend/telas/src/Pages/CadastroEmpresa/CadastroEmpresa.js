import React, { useRef, useState } from 'react';
import Botaocomponente from '../../components/Botaocomponente/Botaocomponente';
import './CadastroEmpresa.css'
import Footer from '../../components/TelaLogin/Footer/Footer';
import HeaderSeta from '../../components/HeaderSeta/HeaderSeta';
import { Button, Center, Select, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CadastroEmpresa() {
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const tipo_usuario = useRef(null);
  const [nome_empresa, setNomeEmpresa] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [instagram, setInstagram] = useState('');
  const [foto, setFoto] = useState('');


  const CadastrarEmpresa =  async (e) => {
    e.preventDefault()

    const credentials = {
      email, 
      senha,
      tipo_usuario: tipo_usuario.current.value,
      nome_empresa,
      telefone,
      endereco,
      instagram,
      foto
    };

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


  const navigate = useNavigate()
  const goToFotos = () => {
    navigate('/goToFotos')
  }

  const goToLogin = () =>{
    navigate('/login')
  }
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };
  
  const handleRemoveFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };


  return (
    <>
    <HeaderSeta/>
    <div className='corpodatela2'>
    <Text
      fontSize={30}
      textDecoration={'GrayText'}
      fontWeight={'bold'}
      lineHeight={'110%'}
      letterSpacing={'-2%'} 
      marginTop={10} 
      fontFamily={'sans-serif'}
      textAlign={'center'}
      padding={2}
      >Empreendimento</Text>
      
      <Center><form onSubmit={CadastrarEmpresa} className='onsubmit'>
  <div className='cadastroempresa'>

    <div className="form-row">
      <label>
        Nome da Empresa:
        <input
          type="text"
          width={4}
          placeholder='Nome da empresa'
          value={nome_empresa}
          onChange={(e) => setNomeEmpresa(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          placeholder='email@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
    </div>

    <div className="form-row">
      <label>
        Senha:
        <input
          type="password"
          value={senha}
          placeholder='********'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
    
      <label>
        Telefone:
        <input
          type="text"
          value={telefone}
          placeholder='51 98282672'
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </label>
    </div>

    <div className="form-row">
      <label>
        Endereço:
      <input
        type="text"
        value={endereco}
        placeholder='Rua Tal, 345 - Bairro'
        onChange={(e) => setEndereco(e.target.value)}
        required
      /></label>

      <label>
        Instagram:
        <input
          type="text"
          value={instagram}
          placeholder='@nomeempresa'
          onChange={(e) => setInstagram(e.target.value)}
          required
        />
      </label>
    </div>
    <div className='dotoo'>
    <div className="arquivos-upload">
    <Text
      fontSize={25}
      textDecoration={'GrayText'}
      fontWeight={'bold'}
      lineHeight={'110%'}
      letterSpacing={'-2%'}  
      fontFamily={'sans-serif'}
      marginTop={15}
      textAlign={'center'}
      padding={2}
      >Adicionar Foto</Text>

    
    {/* <Center>
    <label className="custom-file-upload">
      <input
        type="file"
        value={foto}
        accept="image/*"
        onChange={(e) => setFoto(e.target.value)}
        style={{ display: "none" }}
      />
      <div className="upload-button">Escolher Arquivo</div>
    </label></Center> */}

    <label>
        <input
          type="file"
          value={foto}
          placeholder='@nomeempresa'
          onChange={(e) => setFoto(e.target.value)}
          required
        />
      </label></div>

      {/* <input className='fotoadc'
        type="file"
        value={foto}
        // multiple
        onChange={(e) => setFoto(e.target.value)}
      /> */}
      {/* <div className="file-list">
        {selectedFiles.map((file, index) => (
          <div key={index} className="file-item">
            <span>{file.name}</span>
            <button onClick={() => handleRemoveFile(index)}>Remover</button>
          </div>
        ))} */}
      {/* </div> */}

      <input
        type="hidden"
        value="Admin"
        name='tipo_usuario'
        ref={tipo_usuario}
      />
    </div>
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
        marginTop={5}
        width={'280px'}
        type='submit'
      >
        OK
      </Button>
    </Center>
    </div>
    </form></Center>
      <Footer/>
    </div>
    </>
  
    
  );
}

export default CadastroEmpresa;
