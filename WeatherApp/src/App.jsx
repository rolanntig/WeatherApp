import './App.css'
import { city } from './countries'
import {Autocomplete, TextField, Card, CardContent, CardActions, Typography, Button,Box, createTheme} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'


function App() {

  
  const [value, setValue] = useState(city[0]);
  const [inputValue, setInputValue] = useState('');
  const [cards,setCards] = useState([]);
  const [expandedState, setExpandedState] = useState({});
  

  const CardGen = (id) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value.label}&appid=05abf85529bfdb321b2ca9f97f52d0b8`)
    .then(res =>{
        let temp = Math.ceil(res.data.main.temp - 272.15);
        let icon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
        console.log(res);
        setCards([
          ...cards,
          <Card key={value.label} sx={{ width: 250, ml:10 }} className="card">
            <CardContent>
                <Box>
                  <Box className='icons'>
                  <Typography variant='h4'>{value.label}</Typography>
                  <img src={icon} alt="icon" />
                  </Box>
                  <Typography variant='h5'>Temp: {temp}C°</Typography>
                  <Typography variant='h6'>Weather: {res.data.weather[0].main}</Typography>
                  <Typography variant='h6'>Feels Like: {res.data.main.feels_like}</Typography>
                  <Typography variant='h6'>Max Temp: {res.data.main.temp_max}</Typography>
                  <Typography variant='h6'>Min Temp: {res.data.main.temp_min}</Typography>
                  <Typography variant='h6'>Humidity: {res.data.main.humidity}%</Typography>
                  <Typography variant='h6'>Pressure: {res.data.main.pressure} hPa</Typography>
                  <Typography variant='h6'>Wind Speed: {res.data.wind.speed} m/s</Typography>
                </Box>
            </CardContent>
            </Card>
        ])
      }
    )}

  


  return (
    <>
    <div>
    
      <h1>Väder App</h1>
      <div className='Searchbar'>
      <Autocomplete
        value={value}
        onChange={(e, newValue) => {setValue(newValue);}}
        inputValue={inputValue}
        onInputChange={(e, newInputValue) => {setInputValue(newInputValue);}}
        id="city"
        options={city}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="city"/>}
      />
      </div>
      <Box textAlign="center">
        <Button onClick={CardGen} variant="contained" color='warning' sx={{width:300, mt:2,}}>Generate</Button>
      </Box>
    </div>

    <div>
      <Box sx={{mt:5}}>
        {cards}
      </Box>
    </div>
    </>
  )
}
  

  

export default App
