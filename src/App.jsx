import React, { useState, useEffect } from 'react';
import './App.css';
import WhterApp from './WhterApp';
import Logo from './Logo';

function App() {
  const [cityName, setCityName] = useState("jaipur");
  // console.log(cityName);
  const [weather, setWeather] = useState({});
  const apiKey = "5ab57d20743a91358f8acd0af03159fb";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setWeather(data);
      });
  }, [cityName]);



  return (
    <div>
      <div className='bg-whterimage bg-cover bg-no-repeat h-screen flex justify-center items-center '>
        <div className='h-4/5 w-4/5 bg-[#ffffff78] rounded-lg flex'>
          <WhterApp weather={weather} />
          <Logo  setCityName={setCityName} weather={weather} />
        </div>
      </div>
    </div>
  );
}

export default App;
