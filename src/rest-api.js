import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5';
const apiURL = `${baseURL}/`;
const axiosClient = axios.create({ baseURL: apiURL });

class WeatherAPI {
  static get = filters => axiosClient.get('/find/', {
    params: {
      ...filters,
      appid: 'f92c1f4990b0574d4a4e4d3dd556f388',
      units: 'imperial'
    }
  });
}

export {
  WeatherAPI
};
