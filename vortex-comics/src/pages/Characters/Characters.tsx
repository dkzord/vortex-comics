import React, { useEffect, useState } from 'react';
import api from '../../services/api';

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

  console.log('OUTRO', characters);

  return (
    <div>Characters</div>
  )
}

export default Characters