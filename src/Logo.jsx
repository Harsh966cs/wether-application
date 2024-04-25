import React from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import { useEffect,useState } from 'react';

const Logo = ({ setCityName,weather}) => {
 
//  console.log(weather);
  const apiKey = "5ab57d20743a91358f8acd0af03159fb";
 
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
   
  //       setWether(data);
      
     

  return (
<div className="h-full  ">

<div className="flex  justify-center w-20 h-20   align-middle ml-40  mb-2">
            <img className="h-30 w-20 rounded-full justify-center   "
              src={`https://openweathermap.org/img/wn/${
                weather.weather ? weather?.weather[0]?.icon : " "
              }@2x.png`}
              alt=""
            />
            </div>  

<div className=" bg-black w-[27rem] h-0.5 mt-5 mb-5"></div>
<div className="relative ml-20 w-[25rem]">
      <input
      onChange={(e) => 
         { if(e.target.value!=="")
        {
          setCityName(e.target.value)  
        }
        else
        {
          setCityName("jaipur");
       
        }
      }
       } 
      
        type="text"
        name="price"
        id="price"
        className="block w-1/2 rounded-md border-0 py-1.5 pl-10 pr-4 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none "
        placeholder="Enter your city name"
      />
      
      <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
    </div>
<div className=" justify-center items-center mt-6  ml-[10rem]">
<h1>{weather.name} ,{weather?.sys?.country}</h1>
<h1> {Math.round(weather.main?.temp-273.15)}°C</h1>
</div>
<div className="mt-5 justify-center items-center space-y-2"  >
<div className="flex justify-around"> <p>Temp</p> <h1> {Math.round(weather.main?.temp-273.15)}°C</h1></div>
<div className=" bg-black w-[27rem] h-0.5"></div>
<div className="flex justify-around"> <p>Visibiltiy</p> <p>{Math.round(weather.visibility)/1000}Km</p></div>
<div className=" bg-black w-[27rem] h-0.5"></div>
<div className="flex justify-around"> <p>Wind Speed</p> <p>{weather.wind?.speed} meter/sec</p></div>
<div className=" bg-black w-[27rem] h-0.5"></div>
</div>

    </div>
    
  
  )
}

export default Logo