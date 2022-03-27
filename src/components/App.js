import { useEffect, useState } from 'react';
import '../css/styles.css'
import Weather from '../components/Weather'
import axios from 'axios';

function App() {


  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('istanbul');
    

  const getWeather = async (city) => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=03b30ce8b06c4c839f9100716222703&q=${city}&days=14&aqi=no&alerts=no&lang=en`)
    .then((res) => {
      setWeatherData(res.data);

      console.log(res.data);
    })
  }

  useEffect(() => {
    getWeather(city);
  }, [city])

  return (
    <div className="App">
      <h1>Weather App</h1>

      <div className="container">
        <Weather data={weatherData} setCity={setCity} />
      </div>
    </div>
  );
}

export default App;
