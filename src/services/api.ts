import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hallowed-spider-329711.rj.r.appspot.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;