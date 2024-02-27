import axios from 'axios';

const apiHardware = axios.create({
  baseURL: 'http://localhost:3001'
});

export default apiHardware;
