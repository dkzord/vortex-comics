import React, { useEffect } from 'react';
import api from '../../services/api';

interface ResponseData {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const Creator: React.FC  = () => {
  useEffect(() => {
    api.get('/creators')
      .then((resp: any) => console.log(resp.data.data.results))
      .catch((error: any) => console.error(error))
  }, [])

  return (
    <div>Creator</div>
  )
}

export default Creator