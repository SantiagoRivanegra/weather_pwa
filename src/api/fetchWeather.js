import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '56f80bc1563cdddbdfbff3e928efe0cf'


export const fetchWeather = async (query, {lang}) => {
  const { data } = await axios.get(URL, { 
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
      lang: lang
    },
  })
  return data
}
