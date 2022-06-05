import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { BottomCard, BottomText, Card, CardList, Container, MediaCard, Title, TopCard } from './styles';

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
      {/* <ul>
        {characters.map(characters => {
          return (
            <li key={characters.id}>
               <img src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} alt={`Foto do ${characters.name}`}/>
              <span className="name">{characters.name}</span>
              <span className="description">{characters.description}</span> 
            </li>
          )
        })}
      </ul> */}

      <CardList>
        {characters.map(characters => {
          return (
            <Card key={characters.id}>
              <TopCard>
                <Title>{characters.name}</Title>
              </TopCard>
              <MediaCard thumbnail={characters.thumbnail}>
                {/* <div id="img"/> */}
                <img id="img" src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} alt={`Foto do ${characters.name}`}/>
              </MediaCard>
              <BottomCard>
                <BottomText>{characters.description}</BottomText>
              </BottomCard>
            </Card>
          )
        })}

      </CardList>
    </Container>
  )
}

export default Characters