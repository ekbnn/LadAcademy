import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  //timeout: 1000 * 30, // таймаут 30 секунд
});
