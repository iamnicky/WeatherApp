import React from 'react'
import Quote from './Quote'
import Weather from './Weather'
import { useState } from 'react';
import moment from 'moment';


function Main(props) {
  const { handleToggleDarkMode,weather,setCity,fetchweather} = props;



  var date= new Date();
  var hr = date.getHours();
  
  

 

  return (

    <div className=' flex-wrap '>

<div className='flex justify-between  p-2 mx-4  '>
 <h1 className='font-mono  font-bold text-5xl text-white capitalize'>{hr<12?<h1>good morning☀️</h1>:(hr<16?<h1>good afternoon🌤️</h1>:(hr<18?<h1>good evening⛅</h1>:(hr<24?<h1>good night🌙</h1>:<h1>time not fetched error</h1>)))}</h1>
<button className=' text-green-800 border-4 rounded shadow-3xl border-gray-300 bg-yellow-300 flex jutify-center' onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}><img src="https://img.icons8.com/color/48/000000/back-sorting.png" /></button>

</div>
       <div className='bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-600 m-32 p-32'>
      
      <div className='flex justify-center  '>
         
        <Quote />
        {
          weather?(<Weather weather={weather} setCity={setCity} fetchweather={fetchweather}/>):<h1>data nai mila h </h1>
        }
      </div>
      </div>

    </div>
  )
}

export default Main