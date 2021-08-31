import { WeatherActionTypes } from '../../actionTypes';

export const setCity = (city) => ({
    type: WeatherActionTypes.SET_CITY,
    payload: city
})

export const setWeatherList = (weatherList) => ({
    type: WeatherActionTypes.SET_WEATHER_LIST,
    payload: weatherList
})

export const setInformationCity = (informationCity) => ({
    type: WeatherActionTypes.SET_INFORMATION_CITY,
    payload: informationCity
})

export const setShowAlert = (showAlert) => ({
    type: WeatherActionTypes.SHOW_ALERT,
    payload: showAlert
})

export const addFavorites = (favorites) => ({
    type: WeatherActionTypes.ADD_FAVORITES,
    payload: favorites
})

export const removeFavorites = (removeFavorites) => ({
    type: WeatherActionTypes.REMOVE_FAVORITES,
    payload: removeFavorites
})

export const fetchWeather = (callback) => async (dispatch, getState) => {
    try {
        const city = getState().weather.city
        if (!city) {
            alert('Города нет!')
            callback()
            return
        }
        setTimeout(() => {
            fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?units=metric&appid=a7566f90e4ed0120ac27665a49f3bc9a&q=${city}`)
                .then((response) => response.json())
                .then((answer) => {
                    let weatherInformationCity = answer.city;
                    dispatch(setInformationCity(weatherInformationCity));
                    let weatherList = answer.list
                    dispatch(setWeatherList(weatherList));
                    callback()
                });
        }, 2000)
    } catch (e) {
        console.log('fetcWeather', e)
    }
}

export const addToFavorites = () => async (dispatch, getState) => {
    try {
        const cityName = getState().weather.informationCity.name;
        if (!cityName) {
            alert('Города нет!')
            return
        }
        dispatch(addFavorites(cityName))
    } catch (e) {
        console.log('addToFavorites', e);
    }
}