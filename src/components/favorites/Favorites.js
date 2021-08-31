import './Favorites.css';
import { connect } from 'react-redux';
import React from 'react';
import { WeatherActions } from '../../redux/actions';


const Favorites = (props) => {

    return (
        <ul className='favorites'>
            {props.favorites.map(city => (
                < li className='favorites_city'
                    key={city}>
                    <strong>{city}</strong>
                    <button
                        onClick={() => {
                            props.removeFavorites(city)
                        }}
                        type="button" className="favorites_delete" > ✘ </button>
                </li>))}
        </ul >

    )
}
const mapStateToProps = state => ({
    city: state.weather.city,
    informationCity: state.weather.informationCity,
    favorites: state.weather.favorites,
})
const mapDispatchToProps = {
    removeFavorites: WeatherActions.removeFavorites,

}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);