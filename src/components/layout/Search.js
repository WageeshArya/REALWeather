import React, {useState, useContext} from 'react';
import axios from 'axios';

export const Search = () => {

    const [type,setType] = useState('name');
    const [text,setText] = useState('');

    const textChange = (e) => {
        setText(e.target.value);
        console.log(process.env.REACT_APP_WEATHER_API_KEY);
    }

    const onChange = (e) => {
        setType(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h4>
                    So, how's the weather?
                </h4>
                <label htmlFor="search">
                    {`Please enter the ${type} of the city`}
                </label>
                <div className="row">
                    <input className="nine columns search" type="text" name="search" onChange={textChange} />

                    <select name="type" className="three columns" onChange={onChange}>
                        <option disabled>select type</option>
                        <option value="name" defaultValue>City name</option>
                        <option value="ID">City ID</option>
                        <option value="zip code">Zip Code</option>
                    </select>

                </div>
                
                <input className="button-primary" type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Search;
