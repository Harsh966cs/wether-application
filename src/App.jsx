import React, { useState, useEffect } from 'react';
import './App.css';
import MessageComponent from './Msg'; // Import the MessageComponent
import WhterApp from './WhterApp';
import Logo from './Logo';

function App() {
  const [cityName, setCityName] = useState("jaipur");
  const [weather, setWeather] = useState({});
  const apiKey = "5ab57d20743a91358f8acd0af03159fb";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  // State to manage whether to show the message
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Update the showMessage state based on the screen width
      setShowMessage(window.innerWidth < 860); // Adjust the threshold as needed
    };

    // Check window width on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run only once after initial render

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }, [cityName]);

  return (
    <div>
      {/* Render MessageComponent based on the showMessage state */}
      { showMessage && <MessageComponent className='bg-black text-cyan-50' showMessage={showMessage} />}

{

  !showMessage &&
      <div className='bg-whterimage bg-cover bg-no-repeat h-screen flex justify-center items-center '>
      <div className='h-4/5 w-4/5 bg-[#ffffff78] rounded-lg md:flex w-1/2 bg-[#ffffff78] sm:flex bg-[#ffffff78]'>
      <WhterApp weather={weather} />
      <Logo setCityName={setCityName} weather={weather} />
      </div>
      </div>
}
      
    </div>
  );
}

export default App;
