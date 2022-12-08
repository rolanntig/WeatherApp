
import axios from 'axios'


export const getWeather = () => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a6b6506ac7618eab007596c9f741881d')
    .then(response => {
      // handle success
      console.log(response);
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
  }
  
  export const geoWeather = () => {
    axios.get('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=a6b6506ac7618eab007596c9f741881d')
    .then(res => {
      // handle success
      console.log(res);
      
    })
    .catch(err => {
      // handle error
      console.log(err);
    })
  }