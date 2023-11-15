<img src={trashIcon} alt="Lixeira" className="trash-icon" />
import React, { useEffect, useState } from 'react';
import { Button, Center } from '@chakra-ui/react';
import axios from 'axios';
import './botaolike.css';

const Like = ({ idEmpresa, icon }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    if (!liked) {
      const idUser = localStorage.getItem('@auth:user');
      console.log(idUser, idEmpresa);

      const informacoes = {
        idUser,
        idEmpresa,
      };

      axios
        .post('http://localhost:3008/api/create/favorites', informacoes, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          alert(response.data.message);
          setLiked(true); // Set liked to true after successful like
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <img src={trashIcon} alt="Lixeira" className="trash-icon" />
  );
};

export default Like;