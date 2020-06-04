import React, {useState, useContext} from 'react';
import WeatherContext from '../../context/weather/weatherContext';
export const Search = () => {

    const [type,setType] = useState('name');
    const [text,setText] = useState('');

    const weatherContext = useContext(WeatherContext);
    const textChange = (e) => {
        setText(e.target.value);
    }

    const onChange = (e) => {
        setType(e.target.value);
        weatherContext.setType(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ""){
            weatherContext.setError();
        }
        else{
            weatherContext.getData(text,type);
            setText('');
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h4>
                    So, how's the weather?
                </h4>
                <label htmlFor="search">
                    <p>{`Please enter the ${type} of the city / area`}</p>
                </label>
                <div className="row">
                    <input className="nine columns search" type="text" name="search" onChange={textChange} value={text} />

                    <select name="type" className="three columns" onChange={onChange}>
                        <option disabled>select type</option>
                        <option value="name" defaultValue>City name</option>
                        <option value="ID">City ID</option>
                        <option value="zip code">Zip Code</option>
                    </select>

                </div>
                
                <input className="button-primary submit-btn" type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Search;
