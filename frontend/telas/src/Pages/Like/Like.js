import React, { useEffect, useRef, useState } from "react";
import HeaderSeta from "../../components/HeaderSeta/HeaderSeta";
import axios from "axios";
import './Like.css'
import trashIcon from "../../assets/trash.png";
import companyLogo from "../../assets/comida.jpg";

function Like() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  const favorites = async () => {
    const id = localStorage.getItem('@auth:user');

    await axios
      .get("http://localhost:3008/api/favorites/" + id)
      .then((res) => {
        // Create a Set to store unique favorite IDs
        const uniqueFavoriteIds = new Set();
        const uniqueData = [];

        for (const favorite of res.data.data) {
          if (!uniqueFavoriteIds.has(favorite.id)) {
            uniqueFavoriteIds.add(favorite.id);
            uniqueData.push(favorite);
          }
        }

        setData(uniqueData);
      })
  }

  useEffect(() => {        
    favorites();
  }, [])

  const removerFavorito = (id_empresa) => {
    axios
      .delete(`http://localhost:3008/api/delete/favorites/${id_empresa}`)
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          
          // Atualize a lista de favoritos após a remoção bem-sucedida
          favorites();
        }
      })
      .catch((error) => {
        console.error("Erro ao remover o favorito", error);
      });
  };

  return (
    <>
      <HeaderSeta/>

      {data.map((favorite) => {
        return (
          <div key={favorite.id} className="info-box">
            <img src={favorite.foto} alt="Foto da Empresa" className="company-logo" />
            <div className="text-content">
              <p className="textbold">{favorite.nomeEmpresa}</p>
              <p>Telefone: {favorite.telefone}</p>
              <p>Endereço: {favorite.endereco}</p>
              <p>Instagram: {favorite.instagram}</p>
            </div>
            <img src={trashIcon} 
            alt="Lixeira" 
            className="trash-icon" 
            onClick={() => removerFavorito(favorite.id)}
            />
          </div>
        );
      })}
    </>
  );
}

export default Like;
