import './App.css'
import { city } from './countries'
import {Autocomplete, TextField, Card, CardContent, CardActions, Typography} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'


function App() {

  
  const [value, setValue] = useState(city[0]);
  const [inputValue, setInputValue] = useState('');
  const [weathers,setWeathers] = useState('');
  const [cards,setCards] = useState([]);




    const CardGen = () =>{
      getWeather();
      setCards([
        ...cards,
      
        <Card sx={{ maxWidth: 200, ml: 20 }}>
        <CardContent>
          <Typography variant='h4'>{value.label}</Typography>
          <Typography variant='h5'>{weathers.main}</Typography>
          <Typography varient='h5'>{weathers.weather.icon}</Typography>
          <Typography variant='h6'>{weathers.weather.main}</Typography>
        </CardContent>
        <CardActions>
          <button>Description</button>
        </CardActions>
        </Card>,
      ])

  }

 





console.log(weathers);

  const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value.label}&appid=05abf85529bfdb321b2ca9f97f52d0b8
    `)
      .then(res =>{
      setWeathers(res.data);
      console.log(res.data);
    })
    .catch(error => {
      // handle error
      console.log(error);
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
        <button onClick={CardGen}>gdsjkf</button>
        {cards}
    </div>
  )
}

  

export default App
