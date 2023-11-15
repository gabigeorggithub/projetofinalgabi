import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaInicial from "../Pages/TelaInicial/TelaInicial";
import Erro from "../Pages/Erro/Erro";
import Cadastro from "../Pages/Cadastro/Cadastro";
import CadastroEmpresa from "../Pages/CadastroEmpresa/CadastroEmpresa";
import Login from "../Pages/Login/Login";
import RefSenha from "../Pages/RefSenha/RefSenha";
import PrincipalUsuario from "../Pages/Carousel/Carousel";
import PrincipalProprietario from "../Pages/PrincipalProprietario/PrincipalProprietario";
import Like from "../Pages/Like/Like";
import Fotos from "../Pages/Fotos/Fotos";
import NovaSenha from "../Pages/NovaSenha/NovaSenha";
import Carousel from "../Pages/Carousel/Carousel";
import AtualizarCadastroCadastro from "../Pages/AtualizarCadastro/AtualizarCadastro";
import AtualizarCadastroEmpresa from "../Pages/AtualizarCadastroEmpresa/AtualizarCadastroEmpresa";
import AtualizarCadastro from "../Pages/AtualizarCadastro/AtualizarCadastro";
import Relatorio from "../Pages/Relatorio/Relatorio";

function Rotas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<TelaInicial />}/>
                <Route path="cadastro" element={<Cadastro />}/>
                <Route path="cadastroEmpresa" element={<CadastroEmpresa />}/>
                <Route path="login" element={<Login />}/>
                <Route path="refSenha" element={<RefSenha/>}/>
                <Route path="novasenha" element={<NovaSenha />}/>
                <Route path="principalusuario" element={<PrincipalUsuario />}/>
                <Route path="principalempresa" element={<PrincipalProprietario />}/>
                <Route path="telainicial" element={<TelaInicial />}/>
                <Route path="goToLike" element={<Like />}/>
                <Route path="fotos" element={<Fotos />}/>
                <Route path="carousel" element={<Carousel />}/>
                <Route path="atucaemp" element={<AtualizarCadastroEmpresa />}/>
                <Route path="atuca" element={<AtualizarCadastro />}/>
                <Route path="relatorio" element={<Relatorio />}/>
            </Routes>
        </BrowserRouter>
  
    );
  }
  
  export default Rotas;