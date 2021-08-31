import './FavoritesButton.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { WeatherActions } from '../../redux/actions';
import Alert from '../alert/Alert'



const FavoritesButton = (props) => {

    const favoritesButton = () => {
        props.addToFavorites()
        console.log(props.favorites)
    }




    return (
        <>
            <Alert />
            <button className="add_elect_Button" onClick={favoritesButton} >
                <img className="search_icon_add_elect" src="https://image.flaticon.com/icons/png/512/61/61365.png" />
            </button>
        </>
    )
}
const mapStateToProps = state => ({
    informationCity: state.weather.informationCity,
    favorites: state.weather.favorites
})

const mapDispatchToProps = {
    addToFavorites: WeatherActions.addToFavorites,
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesButton);
