import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { ButtonMore, Card, CardList, Container, MediaCard, Title, TopCard } from './styles';

interface ResponseData {
  id: number;
  fullName: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const Creator: React.FC  = () => {
  const [creators, setCreators] = useState<ResponseData[]>([]);

  useEffect(() => {
    api.get('/creators')
      .then((resp: any) => {
        setCreators(resp.data.data.results)
      })
      .catch((error: any) => console.error(error))
  }, [])

  const handleMore = useCallback(async () => {
    try{
      const offset = creators.length;
      const response = await api.get(`/creators`, { 
        params: { 
          offset,
        },
      });

      setCreators([... creators, ...response.data.data.results]);
    } catch (err) {
      console.error(err);
    }
  }, [creators]);


  return (
    <Container>
      <CardList>
        {creators.map(creators => {
          return (
            <Card key={creators.id}>
              <TopCard>
                <Title>{creators.fullName}</Title>
              </TopCard>
              <MediaCard thumbnail={creators.thumbnail}>
                {/* <div id="img"/> */}
                <img id="img" src={`${creators.thumbnail.path}.${creators.thumbnail.extension}`} alt={`Foto do ${creators.fullName}`}/>
              </MediaCard>
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

export default Creator