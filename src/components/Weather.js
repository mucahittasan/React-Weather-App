import React from 'react'
import Header from './Header'
import WeatherItem from './WeatherItem'

const Weather = ({city, weatherData, setCity}) => {
  return (
    <div>
        <Header city={city} setCity={setCity}/>
        <WeatherItem weatherData={weatherData}/>
    </div>
  )
}

export default Weather