import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';

interface ResponseData {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  useEffect(() => {
    api.get('/characters')
      .then((resp) => {
        setCharacters(resp.data.data.results);
      })
      .catch((error: any) => console.error(error))
  }, [])

  return (
    <Container>
      <h1>Teste do Characters</h1>
      <ul>
        {characters.map(characters => {
          return (
            <li key={characters.id}>
              <img src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} alt={`Foto do ${characters.name}`}/>
              <span className="name">{characters.name}</span>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Characters