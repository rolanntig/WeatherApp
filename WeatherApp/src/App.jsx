import './App.css'
import { country } from './countries'
import {Autocomplete, Card, CardActions, CardContent, TextField, Typography,} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'


const cardGen = () => {
  <Card sx={{ maxWidth: 200, ml: 20 }}>
  <CardContent>
    <Typography variant='h4'>City</Typography>
    <Typography variant='h5'>Temp</Typography>
    <Typography variant='h6'>Icon</Typography>
  </CardContent>
  <CardActions>
    <button>Description</button>
  </CardActions>
</Card>
}




function App() {

  
  const [value, setValue] = useState(country[0]);
  const [inputValue, setInputValue] = useState('');
  const [product,setProduct] = useState([]);


  const geoWeather = () => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=a6b6506ac7618eab007596c9f741881d`)
    .then(res => {
      // handle success
      console.log(res);
      
    })
    .catch(err => {
      // handle error
      console.log(err);
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
      {product.map((prod) => (prod.title))}
      <h1>Weather App</h1>
      <div className='Searchbar'>
      <Autocomplete
        value={value}
        onChange={(e, newValue) => {setValue(newValue);}}
        inputValue={inputValue}
        onInputChange={(e, newInputValue) => {setInputValue(newInputValue);}}
        id="Country"
        options={country}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Country" />}
      />
      <button>Search</button>
      </div>
      <button onClick={geoWeather}>geoweather</button>
    </div>
  )
}

  

export default App
