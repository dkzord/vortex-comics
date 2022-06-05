import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { BottomCard, BottomText, ButtonMore, Card, CardList, Container, MediaCard, Title, TopCard } from './styles';

interface ResponseData {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const HomePage: React.FC  = () => {
  const [comics, setComics] = useState<ResponseData[]>([]);

  useEffect(() => {
    api.get('/comics')
      .then((resp) => {
        setComics(resp.data.data.results)
      })
      .catch((error: any) => console.error(error))
  }, [])

  const handleMore = useCallback(async () => {
    try{
      const offset = comics.length;
      const response = await api.get(`/comics`, { 
        params: { 
          offset,
        },
      });

      setComics([... comics, ...response.data.data.results]);
    } catch (err) {
      console.error(err);
    }
  }, [comics]);

  return (
    <Container>
      <CardList>
        {comics.map(comics => {
          return (
            <Card key={comics.id}>
              <TopCard>
                <Title>{comics.title}</Title>
              </TopCard>
              <MediaCard thumbnail={comics.thumbnail}>
                {/* <div id="img"/> */}
                <img id="img" src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} alt={`Foto do ${comics.title}`}/>
              </MediaCard>
              <BottomCard>
                <BottomText>{comics.description}</BottomText>
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

export default HomePage