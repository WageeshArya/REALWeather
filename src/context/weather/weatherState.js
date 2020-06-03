import React, { useReducer } from 'react';
import {SET_LOADING, GET_DATA, SET_TRUE, SET_TYPE} from '../types';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';

export const WeatherState = props => {
    const initialState = {
        type: '',
        data: false,
        loading: false,
        city: '',
        id: '',
        main: '',
        desc: '',
        country: '',
        temp: '',
        maxTemp: '',
        minTemp: '', 
        wind: {
            speed: '',
            angle: ''
        }
    }

    const [state,dispatch] = useReducer(WeatherReducer, initialState);

    const setLoading = () => dispatch({type: SET_LOADING});

    const setType = (type) => dispatch({type: SET_TYPE, payload: type })

    const getData = async (text, type) =>{
        setLoading();
        let res;
        console.log();
        switch(type){
            case "name":    
                            res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
                            console.log("name -" + type);
                            break;
                
            case "ID":      
                            res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${text}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`); 
                            console.log("ID -" + type);
                            break;

            case "zip code":
                            res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${text}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`); 
                            console.log("zip code -" + type);
                            break;
                default: ;
        }
        console.log(res)
        dispatch({type: GET_DATA, payload: res.data});
        dispatch({type: SET_TRUE, payload: true})
    }

    return <WeatherContext.Provider
                value={{
                    type: state.type,
                    data: state.data,
                    city: state.city,
                    id: state.id,
                    main: state.main,
                    desc: state.desc,
                    country: state.country,
                    temp: state.temp,
                    maxTemp: state.maxTemp,
                    minTemp: state.minTemp,
                    wind: state.wind,
                    setType,
                    setLoading,
                    getData
                }}>{props.children}
                </WeatherContext.Provider>
}

export default WeatherState;

