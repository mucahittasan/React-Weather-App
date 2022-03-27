import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'


const WeatherItem = ({weatherData}) => {
    console.log(weatherData)
  const {theme} = useContext(ThemeContext);

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
                    <div key={index} className={`weather-card ${theme === 'Light' ? 'active' : ''}`}>
                        <h2 className={theme === 'Light' ? 'active' : ''}>{convertDate(item.date)}</h2>
                        <img src={item.day.condition.icon} alt="weather icon"/>
                        <div className={`temp ${theme === 'Light' ? 'active' : ''}`}>
                            <h2 className={`temp-max ${theme === 'Light' ? 'active' : ''}`}>{Math.ceil(item.day.mintemp_c)}°</h2>
                            <h2 className={`slash ${theme === 'Light' ? 'active' : ''}`}>/</h2>
                            <h2 className={`temp-avarage ${theme === 'Light' ? 'active' : ''}`}>{Math.ceil(item.day.avgtemp_c)}°</h2>
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