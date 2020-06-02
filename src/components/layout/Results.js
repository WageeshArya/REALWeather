import React, { Fragment, useContext } from 'react';
import WeatherContext from '../../context/weather/weatherContext';
export const Result = () => {
    
    const weatherContext = useContext(WeatherContext);
    console.log(weatherContext);
    if(!weatherContext.data){
        return <Fragment></Fragment>
    }

    const sunny = <i className="main fas fa-sun"></i>;
    const clear = <i className="main far fa-sun"></i>;
    const rain = <i className="main fas fa-cloud-showers-heavy"></i>;
    const clouds =<i className="main fas fa-cloud"></i>;
    const haze = <i className="main fas fa-smog"></i>

    let weather;

    switch(weatherContext.main){
        case "Clear": weather = clear; break;
        case "Sunny": weather = sunny; break;
        case "Rain": weather = rain; break;
        case "Clouds": weather = clouds; break;
        case "Haze": weather = haze;break;
        default: ;
    }

    return (
        <div className="result">
            
            <h3>The weather in {weatherContext.city} looks like: </h3>
            
            <table>
                <tbody>
                <tr>
                    <td>
                        {weather}
                    </td>
                    <td className="weather">
                        <div>
                            <h4 className="weather-main">{weatherContext.main}</h4>
                            <p className="weather-main desc">{weatherContext.desc}</p>
                            <strong>Temp: {(weatherContext.temp - 273.15).toFixed(2)} </strong>°C
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        
            <div>
                <p className="minmax">The highest will be <strong>{(weatherContext.maxTemp - 273.15).toFixed(2)}</strong> °C and the lowest will be <strong>{(weatherContext.minTemp - 273.15).toFixed(2)}</strong> °C </p>
            </div>

            <table> 
                <tbody>
                <tr>
                    <td className="windInfo">
                        <p className="windInfo"><strong>Wind:</strong> {weatherContext.wind.speed} mph</p>
                        <p><strong>Angle:</strong> {weatherContext.wind.angle}°</p>
                    </td>
                    <td className="areaInfo">
                        <p className="areaInfo"><strong>Country:</strong> {weatherContext.country}</p>
                        <p><strong>ID:</strong> {weatherContext.id}</p>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Result;
