import React, { useEffect } from 'react';
import './App.css';
import Main from './components/Main';


function App() {


  // useEffect(() => {
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=36ac9728a7d9defdbd35a2722ed72148`).then(res => {
  //     setResponse(res.data);
  //     setWeatherDetails(res.data.weather)
  //     console.log(response.weather[0].description==="broken clouds")
  //   })
  // }, [city]);

  return (
    <div className=''>
      <Main/>

    </div>
  );
}

export default App;
