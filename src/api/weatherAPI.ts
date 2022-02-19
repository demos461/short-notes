import axios from 'axios';
import { WeatherType } from './types';

export const getCurrentWeather = () =>
  axios.get<WeatherType>(
    'https://api.openweathermap.org/data/2.5/weather/',
    {
      params: { appid: '4a4e67bdd1cb08d4b4ab908cf100b6f5', q: 'Minsk' },
    },
  );

