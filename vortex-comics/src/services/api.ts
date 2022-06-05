import axios from "axios";
import md5 from "md5";

const publicKey = "d4eca758697ee5df61dc197b27ff1f99";
const privateKey = "64af5fb66d4dbf53e96f3d07041073af6b290260";

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
