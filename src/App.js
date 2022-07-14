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



   const currentYear = (new Date().getFullYear())
   const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

 
  
  return (
  
    <div   style={{ 
      backgroundImage: `url("https://wallpapercave.com/wp/a1tlfX1.jpg")` 
    }}>
  <div className={`${darkMode&& darkMode?'dark-mode':'light-mode'}` }>
      
     
     <Main className='bg-red-200 h-16 w-full '   weather={weather} handleToggleDarkMode={setDarkMode} setCity={setCity} fetchweather={GetData}/>
      
      
      <footer className='flex justify-center font-semibold text-lg text-gray-100'>
           @ { yearTxt } Service - Developed by Nicky ❤️
      </footer>
  
      
      </div>
       
           </div>
  
  
  );
}

export default App;
