import React, { useEffect } from 'react';
import './App.css';

import axios from 'axios';
import { useState } from 'react';
import Weather from './components/Weather';








 


function App() {

  const [weather,setWeather]=useState({});
  const [city,setCity]=useState("ranchi");

useEffect(()=>{
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=36ac9728a7d9defdbd35a2722ed72148`).then(res=>{
    setWeather(res.data);
    console.log(res.data.weather[0].description);
  })
},[]);


  return (
    <div className=' flex justify-center my-8'>
    
    <h2 className='flex justify-center'>ye dikha</h2>
    {
       weather?((<Weather  />)):(<h1>data nai h error</h1>)
    }
    </div>
  );
}

export default App;
 