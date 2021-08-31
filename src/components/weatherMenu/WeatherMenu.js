import './WeatherData.css';
import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';

const WeatherMenu = (props) => {

    if (!props.weatherList) {
        return null
    }
    return (
        <div div className='wather_info'>
            <div className='wather_info_city_name'>Name: {props.informationCity.name} country: {props.informationCity.country} </div>
            {props.weatherList.map(day =>
                <div className="wather_info_menu">
                    <div className='wather_info_data'>data:{moment(day.dt).format("DD MMM YYYY")}</div>
                    <div classname='wather_info_temp_day'>day: {day.temp.day}</div>
                    <div classname='wather_info_temp_night'>night: {day.temp.night}</div>
                    <div className='wather_info_description'>description: {day.weather[0].description}</div>
                    <div className='wather_info_icon' ><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} /></div>
                </div>)
            }
        </div >

    )
}


const mapStateToProps = state => ({
    weatherList: state.weather.weatherList,
    informationCity: state.weather.informationCity,

})

export default connect(mapStateToProps, null)(WeatherMenu);