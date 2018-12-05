import React from 'react';

const Weather = props => (
  <div className="weather__info">
    { props.city && props.country && <p className="weather__key"> Ubicación:
	 		<span className="weather__value"> {props.city}, {props.country}</span>
    </p> }
    { props.temperature && <p className="weather__key"> Temperatura:
	 		<span className="weather__value"> {props.temperature}	</span>
    </p> }
    { props.humidity && <p className="weather__key"> Humedad:
	 		<span className="weather__value"> {props.humidity} </span>
    </p> }
    { props.description && <p className="weather__key"> Condiciones:
	 		<span className="weather__value"> {props.description} </span>
    </p> }
    { props.error && <p className="weather__error">{props.error}</p> }
  </div>
);

export default Weather;