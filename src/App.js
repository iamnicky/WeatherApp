import React, { useEffect } from 'react';
import './App.css';

import axios from 'axios';
import { useState } from 'react';
import Weather from './components/Weather';
import Main from './components/Main';


function App() {


  // useEffect(() => {
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=36ac9728a7d9defdbd35a2722ed72148`).then(res => {
  //     setResponse(res.data);
  //     setWeatherDetails(res.data.weather)
  //     console.log(response.weather[0].description==="broken clouds")
  //   })
  // }, [city]);


  console.log(response)
  return (
    <div className=''>
      

    </div>
  );
}

export default App;
