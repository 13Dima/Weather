import './FetchButton.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { WeatherActions } from '../../redux/actions';
import Loading from '../loading/Loading'

const FetchButton = (props) => {
    const [psotLoading, setPostloading] = useState(false)

    const fetchhWeather = () => {
        setPostloading(true)
        props.fetchWeather(() => {
            setPostloading(false)
        })
    }
    return (
        <>
            {psotLoading
                ? <Loading />
                : <button className="fetch_button" onClick={fetchhWeather}>
                    <img className="search-icon" src="https://image.flaticon.com/icons/svg/49/49116.svg" />
                </button >
            }
        </>
    )
}
const mapStateToProps = state => ({


})

const mapDispatchToProps = {
    fetchWeather: WeatherActions.fetchWeather,
    setShowAlert: WeatherActions.setShowAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchButton);
