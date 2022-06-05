import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { BottomCard, BottomText, ButtonMore, Card, CardList, Container, MediaCard, Title, TopCard } from './styles';

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

  const handleMore = useCallback(async () => {
    try{
      const offset = characters.length;
      const response = await api.get(`/characters`, { 
        params: { 
          offset,
        },
      });

      setCharacters([... characters, ...response.data.data.results]);
    } catch (err) {
      console.error(err);
    }
  }, [characters]);

  return (
    <Container>
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
      <ButtonMore onClick={handleMore}>
        Mais
      </ButtonMore>
    </Container>
  )
}

export default Characters