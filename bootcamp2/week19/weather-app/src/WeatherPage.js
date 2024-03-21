import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

function WeatherPage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = '	E72Fk6v8XSsjh9fUjLB15P0e7wr7gk67'; 
    const url = `curl -X GET "http://dataservice.accuweather.com/currentconditions/v1/locationKey?apikey=%09E72Fk6v8XSsjh9fUjLB15P0e7wr7gk67`;
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = () => {
    fetchWeather();
  };

  const handleSaveToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(city)) {
      favorites.push(city);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Search City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      {weather && (
        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h5">{weather.location.name}</Typography>
            <Typography>{`Temperature: ${weather.current.temp_c}°C`}</Typography>
            <Typography>{`Condition: ${weather.current.condition.text}`}</Typography>
            <Button variant="contained" color="primary" onClick={handleSaveToFavorites}>
              Save to Favorites
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default WeatherPage;
