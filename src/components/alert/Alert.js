import './Alert.css';
import React from 'react';
import { connect } from 'react-redux';
import { WeatherActions } from '../../redux/actions';


const Alert = (props) => {

    if (!props.showAlert) {
        return null
    }

    const onHideAlert = () => {
        props.setShowAlert(false)
    }

    return (
        <div className="alert" >
            <strong> Город добавлен</strong>
            {props.showAlert}
            <button type="button" className="alert_button_delete" aria-label="Close" onClick={onHideAlert}> ✘</button>
        </div>

    )
}

const mapStateToProps = state => ({
    showAlert: state.weather.showAlert,

})
const mapDispatchToProps = {
    setShowAlert: WeatherActions.setShowAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);