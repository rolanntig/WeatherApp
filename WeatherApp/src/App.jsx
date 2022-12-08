import './App.css'
import { countryList } from './countries'
import {Autocomplete, Stack, TextField} from '@mui/material'

function App() {

  return (
    <div>
      <h1>Weather App</h1>
      <div>
      <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={countryList.map((option) => option.Title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
      </Stack>
      </div>
    </div>
  )
}

  

export default App
