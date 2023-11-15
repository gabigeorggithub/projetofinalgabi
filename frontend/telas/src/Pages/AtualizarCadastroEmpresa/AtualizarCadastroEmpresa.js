import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/TelaLogin/Footer/Footer';
import HeaderSeta from '../../components/HeaderSeta/HeaderSeta';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Center, Text } from '@chakra-ui/react';
// import './Cadastro.css'
import axios from 'axios';

const AtualizarCadastroEmpresa = () => {
  // Inicializa dois estados para armazenar o email e a senha
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [userData, setUserData] = useState([]);
  const [nome_empresa, setNomeEmpresa] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [instagram, setInstagram] = useState('');
  const [foto, setFoto] = useState('');
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
    senha,
    nome_empresa,
    endereco,
    instagram,
    telefone,
    foto
  }

    // Função que lida com o envio do formulário
    const AtualizarCadastro =  async (e) => {
      e.preventDefault()

      axios.put('http://localhost:3008/api/userEm/' + id,credentials,{
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
      >Atualizar Empreendimento</Text>
      
      <Center><form onSubmit={AtualizarCadastro} className='onsubmit'>
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
        Atualizar
      </Button>
    </Center>
    </div>
    </form></Center>
      <Footer/>
    </div>
    </>

  )
}
export default AtualizarCadastroEmpresa;