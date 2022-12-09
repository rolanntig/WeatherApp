import './App.css'
import { city } from './countries'
import {Autocomplete, Card, CardActions, CardContent, TextField, Typography,} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'








function App() {

  
  const [value, setValue] = useState(city[0]);
  const [inputValue, setInputValue] = useState('');
  const [product,setProduct] = useState([]);
  const [latlong,setLatlong] = useState([]);
  const [weat,setWeat] = useState([]);


  let longitude = latlong.map((long) => (long.lon));
  let latitude = latlong.map((lati) => (lati.lat));

  let icon = weat.map(ic => (ic.main.temp));


console.log(weat);


  const cardGen = () => {
    geoWeather();
    getWeather();

    <Card sx={{ maxWidth: 200, ml: 20 }}>
    <CardContent>
      <Typography variant='h4'>{value}</Typography>
      <Typography variant='h5'>{icon}</Typography>
      <Typography varient='h5'>Weather</Typography>
      <Typography variant='h6'>Icon</Typography>
    </CardContent>
    <CardActions>
      <button>Description</button>
    </CardActions>
  </Card>
  }


  const geoWeather = () => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value.label}&limit=1&appid=a6b6506ac7618eab007596c9f741881d`)
    .then(res => {
      // handle success
      console.log(res);
      setLatlong(res.data);
      
    })
    .catch(err => {
      // handle error
      console.log(err);
    })
  }

  const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a6b6506ac7618eab007596c9f741881d`)
    .then(res =>{
      setWeat(res.data);
    })
     

    .catch(error => {
      // handle error
      console.log(error);
    })
  }


  
  const dummyjson = () =>{
    axios.get('https://dummyjson.com/products/')
    .then(res => {
      console.log(res);
      setProduct(res.data?.products);
    })
    .catch(err => {
      console.error(err);
    })
  }


  return (
    <div>
    
      <h1>Weder epp</h1>
      <div className='Searchbar'>
      <Autocomplete
        value={value}
        onChange={(e, newValue) => {setValue(newValue);}}
        inputValue={inputValue}
        onInputChange={(e, newInputValue) => {setInputValue(newInputValue);}}
        id="city"
        options={city}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="city" />}
      />
      </div>
        <button onClick={cardGen}>geoweather</button>
    </div>
  )
}

  

export default App
