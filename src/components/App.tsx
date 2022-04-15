import React, { useState } from 'react';
import CountriesDropdown from './countries-dropdown';
import WeatherInfo from './weather-info';

const App = () => {
  const [countryCoordinates, setCountryCoordinates] = useState<object>({});

  return (
    <div>
      <CountriesDropdown setCountryCoordinates={setCountryCoordinates} />
      <WeatherInfo />
    </div>
  );
};

export default App;
