import React , { useState, useEffect } from 'react';
import './App.css';

const api = {
  key: "",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [city, setCity] = useState('');
  const [weather,setWeather] = useState({});

  const search = (evt) =>{
    evt.preventDefault()
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(res =>res.json())
    .then(res =>{
      setWeather(res);
      setCity('');
      console.log(res)
    });
  }
 

  return (
    <div className="App">
     <h1>
       weather app
     </h1>
     <div className="search-box">
       <input 
          type="text" 
          placeholder="Search..."
          onChange={e => setCity(e.target.value)}
          value={city}
          >
       </input>
       <button
        type="button"
        onClick={search}
        >
          Search
        </button>
        
     </div>
    <div>
     <h1>{weather.name}</h1>
     <h2>
       hey
     </h2>
    </div>
    </div>
  );
}

export default App;
