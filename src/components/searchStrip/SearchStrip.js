import './SearchStrip.css';
import React from 'react';
import { connect } from 'react-redux';
import { WeatherActions } from '../../redux/actions';
import FetchButton from '../fetchButton/FetchButton';
import FavoritesButton from '../favoritesButton/FavoritesButton'
import { setShowAlert } from '../../redux/actions/weather/weatherActions';




const SearchStrip = (props) => {

    const onChangeCity = (event) => {
        props.setCity(event.target.value)
        // props.setShowAlert(event.target.value)
        console.log(setShowAlert)
    }

    return (
        <>
            <div className="search_strip" >
                <input type="text" className="search_strip__input" onChange={onChangeCity} placeholder="Enter the name of the city" />
                <FavoritesButton />
                <FetchButton />
            </div>

        </>
    )
}

const mapStateToProps = state => ({
    city: state.weather.city,
    showAlert: state.weather.showAlert,
})

const mapDispatchToProps = {
    setCity: WeatherActions.setCity,
    setShowAlert: WeatherActions.setShowAlert
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchStrip);