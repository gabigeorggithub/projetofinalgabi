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
    <Center>
    <div className='likelike'>
      <Button
        type="submit"
        fontSize={20}
        letterSpacing={1}
        backgroundColor="white"
        variant="solid"
        justifyContent="center"
        alignItems="center"
        margin={0}
        // marginTop={80}
        height={20}
      ><img src={icon} className="foto-like2" onClick={handleLike} />
      </Button>
      </div>
    </Center>
  );
};

export default Like;
