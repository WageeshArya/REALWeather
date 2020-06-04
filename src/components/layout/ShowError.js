import React, {useContext} from 'react'
import WeatherContext from '../../context/weather/weatherContext';
export const ShowError = () => {
    const weatherContext = useContext(WeatherContext);
    
    return (
        weatherContext.err && (<div className="alert"><i className="fas fa-exclamation-circle" /> Please enter something into the search bar.</div>)
    )
}

export default ShowError;