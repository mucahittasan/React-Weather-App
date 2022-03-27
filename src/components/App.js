import { useEffect, useState, useContext } from 'react';
import '../css/styles.css'
import Weather from '../components/Weather'
import axios from 'axios';
import ThemeContext from '../context/ThemeContext'

function App() {

  const {theme, setTheme} = useContext(ThemeContext);

  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('istanbul');
    

  useEffect(() => {
    const getWeather = (city) => {
      axios.get(`https://api.weatherapi.com/v1/forecast.json?key=03b30ce8b06c4c839f9100716222703&q=${city}&days=14&aqi=no&alerts=no&lang=en`)
      .then((res) => {
        setWeatherData(res.data.forecast.forecastday);

      console.log(res.data.forecast.forecastday);
    }).catch(err => console.log(err)) 
  }

  return getWeather(city)
  }, [city])

  return (
    <div className="App">
      <button className='modeBtn' onClick={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}>{theme} Mode</button>
      <h1 className={theme === "Dark" ? "active" : ""}>Weather App</h1>

      <div className={`container ${theme === 'Dark' ? 'active' : ''}`}>
       {weatherData &&  <Weather city={city} weatherData={weatherData} setCity={setCity} />}
      </div>
    </div>
  );
}

export default App;
