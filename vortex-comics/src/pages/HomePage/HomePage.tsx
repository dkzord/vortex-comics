import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com/v1/public/comics?';

const publicKey = 'd4eca758697ee5df61dc197b27ff1f99';
const privateKey = '64af5fb66d4dbf53e96f3d07041073af6b290260';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const HomePage = () => {
  useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  }, [])

  return (
    <h1>
      Marvel
    </h1>
  )
}

export default HomePage