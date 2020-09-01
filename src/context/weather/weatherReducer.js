import {GET_DATA, SET_LOADING, SET_DATA, SET_TYPE, SET_ERROR, REMOVE_ERROR, CLEAR_DATA, SET_UNFOUND} from '../types';


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
                btn: true,
                unfound: false,
                loading: false,
            }
        case SET_DATA: 
            return {
                ...state,
                data: true,
                err: false,
                unfound: false,
                btn: true
            }
         
        case SET_TYPE:
            return {
                ...state,
                type: action.payload
            }   
        case SET_ERROR:
            return {
                ...state,
                err: true
            }
        case REMOVE_ERROR: 
            return {
                ...state,
                err: false
            }
        case CLEAR_DATA:
            return {
                ...state,
                data: false,
                btn: false,
                unfound: false
            }
        case SET_UNFOUND: 
            return {
                ...state,
                unfound: true,
                btn: true
            }
        default: return state;
    }
}
