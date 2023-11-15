import { ChakraProvider } from '@chakra-ui/react';
import Rotas from './Rotas/Rotas';
import TelaInicial from './Pages/TelaInicial/TelaInicial';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';


function App() {
  return (
    <>
    {/* <Login/> */}
    {/* <NovaSenha/> */}
    {/* <RefSenha/> */}
    {/* <Cadastro/> */}
    {/* <CadastroEmpresa/> */}
    {/* <Fotos/> */}
    {/* <Menu/> */}
    {/* <PrincipalUsuario/> */}
    {/* <TelaInicial/> */}
    <ChakraProvider>
      <Rotas/> 
    </ChakraProvider>

    </>
  );
}

export default App;

// AULA DE 17/08 - Map, REAPROVEITAR:
// import "./styles.css";
// import {useState} from "react"

// function App() {

//   const [listadefrutas, setlistadefrutas] = useState([
//     "Maça", "Banana"
//   ])

//   const onClickAdicionarAcai = () => {

//     const copialistadefrutas = [...listadefrutas]
//     copialistadefrutas.push("Açaí")
//     setlistadefrutas(copialistadefrutas)
//   }
//   const listaMapeada = listadefrutas.map((cadaFruta,index) => {
//       return (
//       <li key={index}>{cadaFruta}</li>)
//     })
//   return (
//     <>
//     <ul>{listaMapeada}</ul>
//       <button onClick={onClickAdicionarAcai}>Adiciona Açaí</button>

//     </>
//   );
// }
// export default App;
