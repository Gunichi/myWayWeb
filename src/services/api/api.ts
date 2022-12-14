import axios from 'axios';

import { parseCookies } from 'nookies';

export function getAPIClient(ctx?: any) {
  
  //Token is on Set-Cookie header
  const { 'nextauth.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://150.230.73.121:8000',
  });

  if (token) {

    api.defaults.headers['Authorization'] =  token;

  }
  
  

  return api;
}

export const api = getAPIClient();