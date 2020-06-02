import React, { useReducer } from 'react';
import {SET_LOADING, GET_DATA, SET_TRUE} from '../types';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';

export const WeatherState = props => {
    const initialState = {
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

    const getData = async (text) =>{
        setLoading();
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
        
        dispatch({type: GET_DATA, payload: res.data});
        dispatch({type: SET_TRUE, payload: true})
    }

    return <WeatherContext.Provider
                value={{
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
                    setLoading,
                    getData
                }}>{props.children}
                </WeatherContext.Provider>
}

export default WeatherState;

