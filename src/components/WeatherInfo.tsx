import React from 'react';

const WeatherInfo: React.FC = () => {
  return (
    <div className="text-center my-4 rounded" style={{backgroundColor:"rgba(137, 179, 165,0.2)"}}>
      <h2>32°C</h2>
      <p className="text-success">Good</p>
      <p>Outdoor PM2.5: 75.0%</p>
      <p>Outdoor Humidity: 1008 hPa</p>
    </div>
  );
};

export default WeatherInfo;
