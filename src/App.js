import React from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import Results from './components/layout/Results';
import WeatherState from './context/weather/weatherState';
import './App.css';


import Back1 from './img/Scene/cornerplants.svg';
import Back2 from './img/Scene/cornerplants2.svg';
import Back3 from './img/Scene/cornerplants3.svg';
import Back4 from './img/Scene/cornerplants4.svg';

const App = () => {

  return (
    <WeatherState>
    <div className="App">
      <img src={Back1} alt="backgroundImage" className="img1" />
      <img src={Back2} alt="backgroundImage" className="img2" />
      <img src={Back3} alt="backgroundImage" className="img3" />
      <img src={Back4} alt="backgroundImage" className="img4" />
     <Navbar />
     <Search />
     <Results />
    </div>
    </WeatherState>
  );
}

export default App;
