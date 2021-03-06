import React from 'react'




function Weather( props) {

   const {weather,setCity,fetchweather}=props;

   const date=new Date();
   const month=date.toLocaleString('en-US', { month: 'long' });
   const day=date.toLocaleString('en-US', { day: '2-digit' });
   const year=date.getFullYear();


let sunriseSec=weather?.sys.sunrise;
let sunrise=new Date(sunriseSec*1000);
let timeSunrise =`${sunrise.getHours()} : ${sunrise.getMinutes()}`


let sunsetSec=weather?.sys.sunset;
let sunset=new Date(sunsetSec*1000);
let timeSunset=`${sunset.getHours()} : ${sunset.getMinutes()}`


   
    return (

        <div className='bg-gray-200 h-[100vh] px-12 flex flex-col items-center'>
            <input type='search' placeholder="Search City" onChange={(e)=>{setCity(e.target.value)}} className='px-8 mt-16 bg-slate-400 py-2 text-white text-lg border-none outline-none rounded-xl' />
             
             <button type="submit" onClick={fetchweather} className='p-2 mt-2 text-red-800  rounded-xl border-2 bg-white'>Search</button>
              
              <div className='flex space-x-2 mt-2 text-lg text-gray-600'>
              <span>{month}</span>
              <span>{day}</span>
              <span>{year}</span>
              </div>
               
               <div className='text-lg text-gray-600'>
              <p>Sunrise : {timeSunrise} AM</p>
              <p>Sunset : {timeSunset} PM</p>
              </div>

            {/* <lottie-player className='' src="https://assets5.lottiefiles.com/packages/lf20_cHA3rG.json" background="transparent" speed="1" ></lottie-player> */}
            <img src=''className='mt-12'/>

            <article className='mt-8 py-8 px-12  rounded-lg bg-white shadow-xl flex flex-col items-center justify-center '>
               <h1 className='text-xl font-bold '>{weather?.name}</h1>
               <h1 className='text-7xl font-bold'>{weather?.main.temp}&deg;C</h1>
               <p className='text-gray-900 font-semibold text-3xl mt-8'>{weather?.weather[0].main}</p>
            </article>

            <div className='h-[1px] w-full mt-24 bg-gray-700'></div>
            
            <article className='h-24 w-full mt-4 flex justify-evenly'>

               <div className='px-1 flex flex-col justify-center items-center'>
                <h1 className='text-lg text-gray-600'>Precipitation</h1>
                <h1 className='text-md text-gray-800'>{weather?.main.temp_max}</h1>                
               </div>

               
               <div className='px-1 flex flex-col justify-center items-center'>
                <h1 className='text-lg text-gray-600'>Humidity</h1>
                <h1 className='text-md text-gray-800'>{weather?.main.humidity}</h1>                
               </div>

               
               <div className='px-1 flex flex-col justify-center items-center'>
                <h1 className='text-lg text-gray-600'>Wind</h1>
                <h1 className='text-md text-gray-800'> {weather?.wind.speed}km/s</h1>                
               </div>
            </article>
            
        </div>

    )
}

export default Weather