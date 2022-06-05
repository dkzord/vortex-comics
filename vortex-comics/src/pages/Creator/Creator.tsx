import React, { useEffect } from 'react';
import api from '../../services/api';

const Creator: React.FC  = () => {
  useEffect(() => {
    api.get('/creators')
      .then((resp: any) => console.log(resp.data.data))
      .catch((error: any) => console.error(error))
  }, [])

  return (
    <div>Creator</div>
  )
}

export default Creator