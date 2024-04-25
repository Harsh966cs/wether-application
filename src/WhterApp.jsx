import React from "react";
import  { useState, useEffect } from "react";

const WhterApp = ({weather}) => {
  

  return (
    <div className="bg-fw h-full bg-cover bg-no-repeat w-1/2 rounded-lg   ">
    <div>
             <p className=" text-end text-2xl font-bold ">
              {weather.name} | {weather?.sys?.country}
            </p>
          

            <br></br>
           
    </div>

     <br/>
     <br/>
     <br/>
     <br/>
     <br/> 
            <div className="flex  justify-center">
            <img className="h-30   "
              src={`https://openweathermap.org/img/wn/${
                weather.weather ? weather?.weather[0]?.icon : " "
              }@2x.png`}
              alt=""
            />
            </div>         
    </div>
  );
};

export default WhterApp;

//setCityName->function
