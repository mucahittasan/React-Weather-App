import React from 'react'

const WeatherItem = ({data}) => {

    const convertDate = (date) => {
        const newDate = new Date(date).toDateString()
        return newDate;
    }

    const city = data.location.name;
    const country = data.location.country;

  return (
    <div>
            <h2 className='country'>{country}</h2>
            <h2 className='city'>{city}</h2>
            
            <div className="weather-area">

        {
            data.forecast.forecastday.map((item, index) => {
                return (
                    <div key={index} className='weather-card'>
                        <h2>{convertDate(item.date)}</h2>
                        <img src={item.day.condition.icon} alt="weather icon"/>
                        <div className='temp'>
                            <h2>{Math.ceil(item.day.mintemp_c)}°</h2>
                            <h2>/</h2>
                            <h2>{Math.ceil(item.day.maxtemp_c)}°</h2>
                        </div>
                    </div>
                )
            })
        }
            </div>
    </div>
  )
}

export default WeatherItem