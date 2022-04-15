import React, { useState } from 'react';
import CountriesDropdown from './countries-dropdown';
import WeatherInfo from './weather-info';

const App = () => {
  const [countryLatLong, setCountryLatLong] = useState([]);

  return (
    <div>
      <CountriesDropdown setCountryLatLong={setCountryLatLong} />
      <WeatherInfo />
    </div>
  );
};

export default App;
