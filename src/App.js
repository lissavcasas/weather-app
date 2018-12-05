import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import "./App.css";

const apiKey = '2950b618abc6031611a25c0e9f9eb34d';

class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  }

  getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        if (city && country && data.cod !== '404') {
          console.log(data);
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ''
          });
        } else if (city && country && data.message === "city not found" && data.cod === "404") {
          this.setState({
            error: 'Ciudad no encontrada'
          })
        } else {
          this.setState({
            error: 'Por favor, completa los campos'
          });
        }
      })
  }

  render() {
    return (
      <div className='App'>
        <div className="wrapper d-flex justify-content-center align-items-center">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 d-flex justify-content-center align-items-center text-center title-container">
                  <Title />
                </div>
                <div className="col-sm-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
