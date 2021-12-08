import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sandboxmc.gateway.linkapi.com.br/v1/links',
});
