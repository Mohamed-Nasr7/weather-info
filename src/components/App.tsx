import React, { useState } from 'react';
import CountriesDropdown from './countries-dropdown';
import WeatherInfo from './weather-info';

const App = () => {
  const [countryCoordinates, setCountryCoordinates] = useState<object>({});

  return (
    <div className='app'>
      <CountriesDropdown setCountryCoordinates={setCountryCoordinates} />
      <WeatherInfo countryCoordinates={countryCoordinates} />
    </div>
  );
};

export default App;
