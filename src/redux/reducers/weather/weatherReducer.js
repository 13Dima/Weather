import { WeatherActionTypes } from '../../actionTypes';

const initialState = {
    city: "",
    weatherList: [],
    informationCity: "",
    showAlert: false,
    favorites: [],
    removeFavoritesId: null,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case WeatherActionTypes.SET_CITY:
            return {
                ...state,
                city: action.payload
            }
        case WeatherActionTypes.SET_WEATHER_LIST:
            return {
                ...state,
                weatherList: action.payload
            }
        case WeatherActionTypes.SET_INFORMATION_CITY:
            return {
                ...state,
                informationCity: action.payload
            }
        case WeatherActionTypes.SHOW_ALERT:
            return {
                ...state,
                showAlert: action.payload,
            }
        case WeatherActionTypes.ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        case WeatherActionTypes.REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(city => city != action.payload),
            }

        default:
            return state
    }
}

export default reducer;