import React from 'react'
import Header from './Header'
import WeatherItem from './WeatherItem'

const Weather = ({data, setCity}) => {
  return (
    <div>
        <Header setCity={setCity}/>
        <WeatherItem data={data}/>
    </div>
  )
}

export default Weather