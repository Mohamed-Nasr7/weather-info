import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { countriesUrl } from '../../constants/urls';

type Props = {
  setCountryLatLong: (latlong: []) => void;
};
type Country = {
  name: { common: string };
  latlng: [];
};

const CountriesDropdown = ({ setCountryLatLong }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [countryName, setCountryName] = useState('');
  const { data, isLoading, error } = useFetch(countriesUrl);
  const countries = data as any[];

  const selectCountry = (country: string) => {
    setCountryName(country);
    setIsOpen(false);
  };

  return (
    <div className='dropdown'>
      <button
        className='dropdown__button'
        disabled={isLoading}
        onClick={() => setIsOpen(isOpen => !isOpen)}
      >
        {countryName || 'Select a country'}
      </button>

      {isOpen && data && (
        <ul className='dropdown__menu'>
          {countries.map(item => (
            <li key={item.cca3} onClick={() => selectCountry(item)}>
              {item.name.common}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountriesDropdown;
