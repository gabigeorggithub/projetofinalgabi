// import { useEffect, useRef, useState } from "react";
// import Menu from "../../components/Menu/Menu";
// import axios from "axios";
// import { Button, Center, Text } from "@chakra-ui/react";
// import { json } from "react-router-dom";
// import comida from '../../assets/comida.jpg'
// import whats from '../../assets/whats.png'
// import likerosa from '../../assets/likerosa.png'
// import './PrincipalUsuario.css'


// function PrincipalUsuario() {

//   const [data, setData] = useState([])

//   const usuariosAdmin = async () => {
//     await axios
//       .get("http://localhost:3008/api/users")
//       .then((res) => {
//         console.log(res.data.data)
//         setData(res.data.data)
//       })
//   }

//   useEffect(() => {        
//     usuariosAdmin();
//   }, [])

//   console.log(data)

//   const nomempresa = data.map((user) => <Text
//   fontSize={30}
//   textDecoration={'GrayText'}
//   fontWeight={'bold'}
//   lineHeight={'110%'}
//   letterSpacing={'-2%'}  
//   fontFamily={'sans-serif'}
//   textAlign={'center'}
//   marginTop={3}
//   marginBottom={-2}
  
//   >{ user.nome_empresa }</Text>)  
                 
//   const endereco = data.map((user) => <Text
//   fontSize={16}
//   textDecoration={'GrayText'}
//   lineHeight={'110%'}
//   fontFamily={'sans-serif'}
//   textAlign={'center'}
//   marginTop={1}
//   marginLeft={1}
//   >{ user.endereco }, {user.numero_endereco}</Text>) 
  
  
//   const telefone = data.map((user) => <Text
//   fontSize={22}
//   textDecoration={'GrayText'}
//   lineHeight={'110%'}
//   fontFamily={'sans-serif'}
//   textAlign={'center'}
//   marginTop={1}
//   marginLeft={1}

//   >{ user.telefone }</Text>)

//   const id = data.map((user) => <Text
//   fontSize={22}
//   textDecoration={'GrayText'}
//   lineHeight={'110%'}
//   fontFamily={'sans-serif'}
//   textAlign={'center'}
//   marginTop={1}
//   marginLeft={1}

//   >{ user.id }</Text>)       
  
  
//   const foto = data.map((user) => <img src={ user.foto }></img>)   
  
//   const handleLike = async () => {
//     //e.preventDefault();   

//     const id_User = localStorage.getItem('@auth:user');
//     const id_Empresa = 5;
//     console.log(id_User, id_Empresa, id[13]);

//     const informacoes = {
//       id_User,
//       id_Empresa
//     }

//     axios.post('http://localhost:3008/api/create/favorites', informacoes,{
//       headers:{
//         'Content-Type': 'application/json',
//       },
//     })
//     .then(response =>{
//       alert(response.data.message)
//     })
//     .catch(error => console.log(error))
//   };

//       //enviar pra API

//   return (
//     <>
//     <Menu/>
//       <p>{ nomempresa[13] }</p>
//       <p>{ endereco[13] }</p>
//       <center><img src={comida} className="foto-principal"></img></center>

//       <Center>
//       <div className="whats">
//       <img src={whats} className="foto-whats"></img>
//       <Text>{ telefone[13] }</Text>
//       </div>
//       </Center>


//       <Center>
//       <Button
//         type='submit'
//         fontSize={20}
//         letterSpacing={1}
//         backgroundColor='white'
//         variant='solid'
//         justifyContent='center'
//         alignItems='center'
//         margin={0}
//         marginTop={-7}
//         height={20}
//       >
//         <img src={likerosa} onClick={ handleLike } className="foto-like"></img>
//       </Button></Center>

//     </>
//   );
// }

// export default PrincipalUsuario;