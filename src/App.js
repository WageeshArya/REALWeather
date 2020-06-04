import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import WeatherState from './context/weather/weatherState';
import ShowError from './components/layout/ShowError';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import './App.css';


import Back1 from './img/Scene/cornerplants.svg';
import Back2 from './img/Scene/cornerplants2.svg';
import Back3 from './img/Scene/cornerplants3.svg';
import Back4 from './img/Scene/cornerplants4.svg';

const App = () => {

  return (

    <WeatherState>
    <Router>
      <div className="App">
        <img src={Back1} alt="backgroundImage" className="img1" />
        <img src={Back2} alt="backgroundImage" className="img2" />
        <img src={Back3} alt="backgroundImage" className="img3" />
        <img src={Back4} alt="backgroundImage" className="img4" />
      <Navbar />
      <ShowError />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />

        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
    </WeatherState>
  );
}

export default App;
