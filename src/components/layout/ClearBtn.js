import React, {useContext} from 'react'
import WeatherContext from '../../context/weather/weatherContext';

export const ClearBtn = () => {
    
    const weatherContext = useContext(WeatherContext);

    const clearData = () => {
        weatherContext.clearData();
    }

    return (
        weatherContext.btn && (<div>
            <button onClick={clearData} className="clear">Clear</button>
        </div>)
    )
}

export default ClearBtn;
