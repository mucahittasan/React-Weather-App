import React from 'react'

const WeatherItem = ({weatherData}) => {
    console.log(weatherData)

    const days = ['Pazar','Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    const convertDate = (date) =>{
        const newDate = new Date(date).getDay();
        return days[newDate];
    } 
  
  return (
    <div>
            <div className="weather-area">

        {
            weatherData.map((item, index) => {
                return (
                    <div key={index} className='weather-card'>
                        <h2>{convertDate(item.date)}</h2>
                        <img src={item.day.condition.icon} alt="weather icon"/>
                        <div className='temp'>
                            <h2 className='temp-max'>{Math.ceil(item.day.mintemp_c)}°</h2>
                            <h2 className='slash'>/</h2>
                            <h2 className='temp-avarage'>{Math.ceil(item.day.avgtemp_c)}°</h2>
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