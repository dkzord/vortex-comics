import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { BottomCard, BottomText, ButtonModal, ButtonMore, Card, CardList, Container, ContainerModal, MediaCard, MediaCardModal, Title, TopCard } from './styles';
import Modal from 'react-modal';

interface ResponseData {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

Modal.setAppElement('#root');

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

  /* MODALLLLLLL */
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  function hadleNewTransactionModal(){
    setIsNewTransactionModal(true);
  }

  function hadleClearNewTransactionModal(){
    setIsNewTransactionModal(false);
  }

  return (
    <Container>
      <CardList>
        {comics.map(comics => {
          return (
            <div>
            <ButtonModal onClick={hadleNewTransactionModal} >
              <Card key={comics.id}>
                <TopCard>
                  <Title>{comics.title}</Title>
                </TopCard>
                <MediaCard thumbnail={comics.thumbnail}>
                  {/* <div id="img"/> */}
                  <img id="img" src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} alt={`Foto do ${comics.title}`} />
                </MediaCard>
              </Card>
            </ButtonModal>
            <Modal
              isOpen={isNewTransactionModal}
              onRequestClose={hadleClearNewTransactionModal}
              overlayClassName="react-modal-overlay"
              className="react-modal-content"
            >
              <ContainerModal>
                <h2>{comics.title}</h2>
                <MediaCardModal thumbnail={comics.thumbnail}>
                  <img id="img" src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} alt={`Foto do ${comics.title}`} />
                </MediaCardModal>
                <BottomCard>
                  <BottomText>{comics.description}</BottomText>
                </BottomCard>
              </ContainerModal>
            </Modal>
            </div>
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