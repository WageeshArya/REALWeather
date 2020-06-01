import {SET_LOADING, SET_CITY} from '../types';
import axios from 'axios';
import React, {useReducer} from 'react';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';

const weatherState = props => {
    const initialState = {
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
}

export const weatherState = () => {
    return (
        <div>
            
        </div>
    )
}
