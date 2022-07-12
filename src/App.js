import React, { useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import { useState } from 'react';
import axios from 'axios';


function App() {

const [weather,setWeather]=useState();
  const [city,setCity]=useState("ranchi");
  const [darkMode,setDarkMode]=useState(false);

  let GetData=()=> {
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=36ac9728a7d9defdbd35a2722ed72148`).then(response => {
       setWeather(response.data);
     
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
   }

   useEffect(()=>{
    GetData()
    console.log(weather)
   },[])





 
  
  return (
    <div className={`${darkMode&&'dark-mode'}`}>
      <Main className='bg-red-200 h-16 w-full'   weather={weather} handleToggleDarkMode={setDarkMode} setCity={setCity} fetchweather={GetData}/>
       <h1>hello nicky {weather?.main.temp}</h1>
      

    </div>
  
  );
}

export default App;
