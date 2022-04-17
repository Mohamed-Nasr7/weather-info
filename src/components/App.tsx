import { useState } from 'react';
import CountryCoordinates from '../interfaces/CountryCoordinates';
import CountriesDropdown from './countries-dropdown';
import WeatherInfo from './weather-info';

const App = () => {
  const [countryCoordinates, setCountryCoordinates] = useState(
    {} as CountryCoordinates
  );

  return (
    <div className='app'>
      <CountriesDropdown setCountryCoordinates={setCountryCoordinates} />
      {countryCoordinates.latitude && (
        <WeatherInfo countryCoordinates={countryCoordinates} />
      )}
    </div>
  );
};

export default App;
