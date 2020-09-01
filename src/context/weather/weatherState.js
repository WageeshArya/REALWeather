import React, { useReducer } from 'react';
import {SET_LOADING, GET_DATA, SET_DATA, SET_TYPE, SET_ERROR, REMOVE_ERROR, CLEAR_DATA, SET_UNFOUND} from '../types';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';

const weatherAPIkey = process.env.REACT_APP_API_KEY;

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
        },
        unfound: false,
        err: false,
        btn: false
    }


    const [state,dispatch] = useReducer(WeatherReducer, initialState);

    const setLoading = () => dispatch({type: SET_LOADING});

    const setType = (type) => dispatch({type: SET_TYPE, payload: type })

    const getData = async (text, type) => {
        setLoading();
        let res;
        try {
            switch(type){
                case "name":    
                                res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${weatherAPIkey}`);
                                dispatch({type: GET_DATA, payload: res.data});
                                dispatch({type: SET_DATA});
                                break;
                    
                case "ID":      
                                res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${text}&appid=${weatherAPIkey}`); 
                                dispatch({type: GET_DATA, payload: res.data});
                                dispatch({type: SET_DATA});
                                break;

                case "zip code":
                                res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${text}&appid=${weatherAPIkey}`); 
                                dispatch({type: GET_DATA, payload: res.data});
                                dispatch({type: SET_DATA});
                                break;
                    default: ;
            }
        }
        catch(error) {
            if(error.response.status !== 200){
                dispatch({type: SET_UNFOUND});
            } 
        }
    }

    const clearData = () => {
        dispatch({type: CLEAR_DATA});
    }

    const setError = () => {
        dispatch({type: SET_ERROR});
        setTimeout(() => dispatch({ type: REMOVE_ERROR }), 5000);
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
                    btn: state.btn,
                    err: state.err,
                    unfound: state.unfound,
                    setType,
                    setLoading,
                    getData,
                    clearData,
                    setError
                }}>{props.children}
                </WeatherContext.Provider>
}

export default WeatherState;

