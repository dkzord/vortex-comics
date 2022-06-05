import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const HomePage: React.FC  = () => {
  useEffect(() => {
    api.get('/comics')
      .then((resp: any) => console.log(resp.data.data))
      .catch((error: any) => console.error(error))
  }, [])

  return (
    <h1>
      Marvel
    </h1>
  )
}

export default HomePage