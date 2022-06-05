import styled from "styled-components";

interface ThumbnailData {
  thumbnail: {
    extension: string;
    path: string;
  };
}

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  margin-left: 20px;

  li {
    list-style: none;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const urlImg = (props: ThumbnailData) =>
  `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
  background: var(--color-white);
  border-radius: 20px;
  box-shadow: 0 2px 23px var(--color-shodow);
  width: 300px;
  height: 450px;
  margin: 10px;
  overflow: hidden;
`;

export const TopCard = styled.div`
  padding: 20px;
  padding-top: 10px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: var(--color-title-card);
  text-align: justify;
`;

export const MediaCard = styled.div`
  img {
    background: url(${urlImg}) no-reapt center;
    height: 300px;
    width: 100%;
    border-radius: 2px;
    background-size: cover;

    transition: all 1s;
  }
`;

export const BottomCard = styled.div`
  padding: 20px;
`;

export const BottomText = styled.span`
  color: var(--color-description-card);
  text-align: justify;
  margin-bottom: 10px;
`;

export const ButtonMore = styled.button`
  background: #f1f1f1;
  height: 40px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  margin: 20px auto;
  padding: 0 50px;
  border-radius: 5px;
  transition: all 0.3s;

  & {
    background: #31d2f2;
  }

  &:hover {
    background: #0b5ed7;
  }
`;

export const ButtonModal = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const ContainerModal = styled.div`
  width: 100%;
  max-width: 700px;

  h2 {
    color: var(--color-title-card);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const MediaCardModal = styled.div`
  img {
    background: url(${urlImg}) no-reapt center;
    height: 450px;
    width: 300px;
    border-radius: 2px;
    background-size: cover;
    transition: all 1s;
  }
`;
