import {GET_DATA, SET_LOADING, SET_TRUE} from '../types';


export default (state, action) => {
    switch(action.type){
        case SET_LOADING:     
        return {
            ...state,
            loading: true
        }
        case GET_DATA: 
        return {
            ...state,
            city: action.payload.name,
            id: action.payload.sys.id,
            main: action.payload.weather[0].main,
            desc: action.payload.weather[0].description,
            country: action.payload.sys.country,
            temp: action.payload.main.temp,
            maxTemp: action.payload.main.temp_max,
            minTemp: action.payload.main.temp_min, 
            wind: {
                speed: action.payload.wind.speed,
                angle: action.payload.wind.deg
            },
            loading: false
        }
        case SET_TRUE: 
            return {
                ...state,
                data: true
            }
         
        default: return state;
    }
}
