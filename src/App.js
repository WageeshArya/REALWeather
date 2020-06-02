import React, { useContext } from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import Results from './components/layout/Results';
import WeatherState from './context/weather/weatherState';
import './App.css';


import Back1 from './img/Scene/cornerplants.svg';
import Back2 from './img/Scene/cornerplants2.svg';

const App = () => {

  return (
    <WeatherState>
    <div className="App">
      <img src={Back1} alt="backgroundImage" className="img1" />
      <img src={Back2} alt="backgroundImage" className="img2" />
     <Navbar />
     <Search />
     <Results />
    </div>
    </WeatherState>
  );
}

export default App;
